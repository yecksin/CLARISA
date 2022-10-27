import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
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

  async findOne(id: number): Promise<PartnerRequest> {
    return await this.partnerRequestRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async createPartnerRequest(
    incomingPartnerRequest: CreatePartnerRequestDto,
    userData: UserData,
  ): Promise<ResponseDto<PartnerRequestDto>> {
    incomingPartnerRequest.userId = userData.userId;
    incomingPartnerRequest.externalUserMail =
      incomingPartnerRequest.externalUserMail ?? userData.email;

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
}
