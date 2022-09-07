import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { UpdateSdgIndicatorDto } from './dto/update-sdg-indicator.dto';
import { SdgIndicator } from './entities/sdg-indicator.entity';

@Injectable()
export class SdgIndicatorService {
  constructor(
    @InjectRepository(SdgIndicator)
    private sdgIndicatorRepository: Repository<SdgIndicator>,
  ) {}

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
