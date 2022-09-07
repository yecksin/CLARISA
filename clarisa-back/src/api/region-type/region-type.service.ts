import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { UpdateRegionTypeDto } from './dto/update-region-type.dto';
import { RegionType } from './entities/region-type.entity';

@Injectable()
export class RegionTypeService {
  constructor(
    @InjectRepository(RegionType)
    private regionTypesRepository: Repository<RegionType>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<RegionType[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.regionTypesRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.regionTypesRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<RegionType> {
    return await this.regionTypesRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateRegionTypeDto: UpdateRegionTypeDto[]) {
    return await this.regionTypesRepository.save(updateRegionTypeDto);
  }
}
