import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { CreateHomepageClarisaCategoryDto } from './dto/create-homepage-clarisa-category.dto';
import { UpdateHomepageClarisaCategoryDto } from './dto/update-homepage-clarisa-category.dto';
import { HomepageClarisaCategory } from './entities/homepage-clarisa-category.entity';

@Injectable()
export class HomepageClarisaCategoryService {
  constructor(
    @InjectRepository(HomepageClarisaCategory)
    private generalAcronimRepository: Repository<HomepageClarisaCategory>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<HomepageClarisaCategory[]> {
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

  async findOne(id: number): Promise<HomepageClarisaCategory> {
    return await this.generalAcronimRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(
    updateGeneralDtoList: UpdateHomepageClarisaCategoryDto[],
  ): Promise<HomepageClarisaCategory[]> {
    return await this.generalAcronimRepository.save(updateGeneralDtoList);
  }
}
