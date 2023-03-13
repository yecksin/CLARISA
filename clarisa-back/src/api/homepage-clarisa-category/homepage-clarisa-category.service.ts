import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateHomepageClarisaCategoryDto } from './dto/update-homepage-clarisa-category.dto';
import { HomepageClarisaCategory } from './entities/homepage-clarisa-category.entity';
import { HomepageClarisaCategoryRepository } from './repositories/homepage-clarisa-category.repository';

@Injectable()
export class HomepageClarisaCategoryService {
  constructor(
    private homepageClarisaCategoryRepository: HomepageClarisaCategoryRepository,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<HomepageClarisaCategory[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.homepageClarisaCategoryRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.homepageClarisaCategoryRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<HomepageClarisaCategory> {
    return await this.homepageClarisaCategoryRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(
    updateGeneralDtoList: UpdateHomepageClarisaCategoryDto[],
  ): Promise<HomepageClarisaCategory[]> {
    return await this.homepageClarisaCategoryRepository.save(
      updateGeneralDtoList,
    );
  }
}
