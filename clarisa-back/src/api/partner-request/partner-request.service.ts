import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { MisOption } from 'src/shared/entities/enums/mises-options';
import { PartnerRequestDto } from './dto/partner-request.dto';
import { PartnerRequest } from './entities/partner-request.entity';
import { PartnerRequestRepository } from './repositories/partner-request.repository';

@Injectable()
export class PartnerRequestService {
  constructor(private partnerRequestRepository: PartnerRequestRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
    mis: string = MisOption.ALL.path,
  ): Promise<PartnerRequestDto[]> {
    if (!Object.values<string>(FindAllOptions).includes(option)) {
      throw Error('?!');
    }

    if (!MisOption.getfromPath(mis)) {
      throw Error('?!');
    }

    return this.partnerRequestRepository.findAllPartnerRequests(option, mis);
  }

  async findOne(id: number): Promise<PartnerRequest> {
    return await this.partnerRequestRepository.findOneBy({
      id,
      is_active: true,
    });
  }
}
