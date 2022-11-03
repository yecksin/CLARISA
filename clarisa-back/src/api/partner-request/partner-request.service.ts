import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { RespondRequestDto } from 'src/shared/entities/dtos/respond-request.dto';
import { ResponseDto } from 'src/shared/entities/dtos/response-dto';
import { MisOption } from 'src/shared/entities/enums/mises-options';
import { PartnerStatus } from 'src/shared/entities/enums/partner-status';
import { UserData } from 'src/shared/interfaces/user-data';
import { Repository } from 'typeorm';
import { CountryRepository } from '../country/repositories/country.repository';
import { InstitutionType } from '../institution-type/entities/institution-type.entity';
import { Mis } from '../mis/entities/mis.entity';
import { User } from '../user/entities/user.entity';
import { CreatePartnerRequestDto } from './dto/create-partner-request.dto';
import { PartnerRequestDto } from './dto/partner-request.dto';
import { PartnerRequest } from './entities/partner-request.entity';
import { PartnerRequestRepository } from './repositories/partner-request.repository';

@Injectable()
export class PartnerRequestService {
  constructor(
    private partnerRequestRepository: PartnerRequestRepository,
    @InjectRepository(InstitutionType)
    private institutionTypeRepository: Repository<InstitutionType>,
    @InjectRepository(Mis)
    private misRepository: Repository<Mis>,
    private countryRepository: CountryRepository,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(
    status: string = PartnerStatus.PENDING.path,
    mis: string = MisOption.ALL.path,
  ): Promise<PartnerRequestDto[]> {
    if (!PartnerStatus.getfromPath(status)) {
      throw Error('?!');
    }

    if (!MisOption.getfromPath(mis)) {
      throw Error('?!');
    }

    return this.partnerRequestRepository.findAllPartnerRequests(status, mis);
  }

  async findOne(id: number): Promise<PartnerRequestDto> {
    return this.partnerRequestRepository.findPartnerRequestById(id);
  }

  async createPartnerRequest(
    incomingPartnerRequest: CreatePartnerRequestDto,
    userData: UserData & { mis: string },
  ): Promise<ResponseDto<PartnerRequestDto>> {
    incomingPartnerRequest.userId = userData.userId;
    incomingPartnerRequest.externalUserMail =
      incomingPartnerRequest.externalUserMail ?? userData.email;

    if (userData.mis && !incomingPartnerRequest.misAcronym) {
      incomingPartnerRequest.misAcronym = userData.mis;
    }

    incomingPartnerRequest = plainToInstance(
      CreatePartnerRequestDto,
      incomingPartnerRequest,
    );

    //Basic validations
    let validationErrors: string[] = (
      await validate(incomingPartnerRequest)
    ).flatMap((e) => {
      const newLocal = Object.values(e.constraints).map((m) => m);
      return newLocal;
    });

    if (validationErrors.length > 0) {
      throw new HttpException(
        HttpException.createBody(
          ResponseDto.createBadResponse(validationErrors, this.constructor),
        ),
        HttpStatus.BAD_REQUEST,
      );
    }

    //Comprehensive validations
    const newPartnerRequest: PartnerRequest = new PartnerRequest();

    newPartnerRequest.institution_type_object =
      await this.institutionTypeRepository.findOneBy({
        id: incomingPartnerRequest.institutionTypeCode,
      });

    newPartnerRequest.country_object = await this.countryRepository.findOneBy({
      iso_alpha_2: incomingPartnerRequest.hqCountryIso,
    });

    newPartnerRequest.mis_object = await this.misRepository.findOneBy({
      acronym: incomingPartnerRequest.misAcronym,
    });

    newPartnerRequest.created_by_object = await this.userRepository.findOneBy({
      id: incomingPartnerRequest.userId,
    });

    if (!newPartnerRequest.institution_type_object) {
      validationErrors.push(
        `An institution type with id '${incomingPartnerRequest.institutionTypeCode}' could not be found`,
      );
    }

    if (!newPartnerRequest.country_object) {
      validationErrors.push(
        `A country with the ISO-2 code '${incomingPartnerRequest.hqCountryIso}' could not be found`,
      );
    }

    if (!newPartnerRequest.mis_object) {
      validationErrors.push(
        `An MIS with the acronym '${incomingPartnerRequest.misAcronym}' could not be found`,
      );
    }

    if (!newPartnerRequest.created_by_object) {
      validationErrors.push(
        `An user with the id '${incomingPartnerRequest.userId}' could not be found`,
      );
    }

    if (validationErrors.length > 0) {
      throw new HttpException(
        HttpException.createBody(
          ResponseDto.createBadResponse(validationErrors, this.constructor),
        ),
        HttpStatus.BAD_REQUEST,
      );
    }

    const response: PartnerRequestDto =
      await this.partnerRequestRepository.createPartnerRequest(
        incomingPartnerRequest,
        newPartnerRequest,
      );

    return ResponseDto.createCreatedResponse(response, this.constructor);
  }

  async respondPartnerRequest(
    respondPartnerRequestDto: RespondRequestDto,
    userData: UserData,
  ): Promise<PartnerRequestDto> {
    respondPartnerRequestDto.userId = userData.userId;
    respondPartnerRequestDto.externalUserMail =
      respondPartnerRequestDto.externalUserMail ??= userData.email;

    respondPartnerRequestDto = plainToInstance(
      RespondRequestDto,
      respondPartnerRequestDto,
    );

    //Basic validations
    let validationErrors: string[] = (
      await validate(respondPartnerRequestDto)
    ).flatMap((e) => {
      const newLocal = Object.values(e.constraints).map((m) => m);
      return newLocal;
    });

    if (validationErrors.length > 0) {
      throw new HttpException(
        HttpException.createBody(
          ResponseDto.createBadResponse(validationErrors, this.constructor),
        ),
        HttpStatus.BAD_REQUEST,
      );
    }

    //Comprehensive validations
    const partnerRequest: PartnerRequest =
      await this.partnerRequestRepository.findOneBy({
        id: respondPartnerRequestDto.requestId,
      });

    const user: User = await this.userRepository.findOneBy({
      id: respondPartnerRequestDto.userId,
    });

    if (!partnerRequest) {
      validationErrors.push(
        `A partner request with id '${respondPartnerRequestDto.requestId}' could not be found`,
      );
    }

    if (!user) {
      validationErrors.push(
        `An user with id '${respondPartnerRequestDto.userId}' could not be found`,
      );
    }

    if (validationErrors.length > 0) {
      throw new HttpException(
        HttpException.createBody(
          ResponseDto.createBadResponse(validationErrors, this.constructor),
        ),
        HttpStatus.BAD_REQUEST,
      );
    }

    const now = new Date();

    if (respondPartnerRequestDto.accept) {
      partnerRequest.accepted_by = user.id;
      partnerRequest.accepted_date = now;
    } else {
      partnerRequest.rejected_by = user.id;
      partnerRequest.rejected_date = now;
      partnerRequest.reject_justification =
        respondPartnerRequestDto.rejectJustification;
    }

    return this.partnerRequestRepository.respondPartnerRequest(
      partnerRequest,
      respondPartnerRequestDto,
    );
  }
}
