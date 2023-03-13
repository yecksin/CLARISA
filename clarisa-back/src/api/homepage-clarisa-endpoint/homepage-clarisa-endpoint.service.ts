import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateHomepageClarisaEndpointDto } from './dto/update-homepage-clarisa-endpoint.dto';
import { HomepageClarisaEndpoint } from './entities/homepage-clarisa-endpoint.entity';
import { HomepageClarisaEndpointRepository } from './repositories/homepage-clarisa-endpoint.repository';

@Injectable()
export class HomepageClarisaEndpointService {
  constructor(
    private generalAcronimRepository: HomepageClarisaEndpointRepository,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<HomepageClarisaEndpoint[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.generalAcronimRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.generalAcronimRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<HomepageClarisaEndpoint> {
    return await this.generalAcronimRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(
    updateGeneralDtoList: UpdateHomepageClarisaEndpointDto[],
  ): Promise<HomepageClarisaEndpoint[]> {
    return await this.generalAcronimRepository.save(updateGeneralDtoList);
  }
}
