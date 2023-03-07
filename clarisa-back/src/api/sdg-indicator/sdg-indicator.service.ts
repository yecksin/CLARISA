import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateSdgIndicatorDto } from './dto/update-sdg-indicator.dto';
import { SdgIndicator } from './entities/sdg-indicator.entity';
import { SdgIndicatorRepository } from './repositories/sdg-indicator.repository';

@Injectable()
export class SdgIndicatorService {
  constructor(private sdgIndicatorRepository: SdgIndicatorRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<SdgIndicator[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.sdgIndicatorRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.sdgIndicatorRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<SdgIndicator> {
    return await this.sdgIndicatorRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(
    updateSdgIndicatorDtoList: UpdateSdgIndicatorDto[],
  ): Promise<SdgIndicator[]> {
    return await this.sdgIndicatorRepository.save(updateSdgIndicatorDtoList);
  }
}
