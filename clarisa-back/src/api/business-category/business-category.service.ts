import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { CreateBusinessCategoryDto } from './dto/create-business-category.dto';
import { UpdateBusinessCategoryDto } from './dto/update-business-category.dto';
import { BusinessCategory } from './entities/business-category.entity';

@Injectable()
export class BusinessCategoryService {
  constructor(
    @InjectRepository(BusinessCategory)
    private businessCategoriesRepository: Repository<BusinessCategory>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<BusinessCategory[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.businessCategoriesRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.businessCategoriesRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<BusinessCategory> {
    return await this.businessCategoriesRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateBusinessCategoryDto: UpdateBusinessCategoryDto[]) {
    return await this.businessCategoriesRepository.save(
      updateBusinessCategoryDto,
    );
  }
}
