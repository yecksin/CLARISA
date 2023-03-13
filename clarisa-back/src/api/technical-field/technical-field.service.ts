import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateTechnicalFieldDto } from './dto/update-technical-field.dto';
import { TechnicalField } from './entities/technical-field.entity';
import { TechnicalFieldRepository } from './repositories/technical-field.repository';

@Injectable()
export class TechnicalFieldService {
  constructor(private technicalFieldsRepository: TechnicalFieldRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<TechnicalField[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.technicalFieldsRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.technicalFieldsRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<TechnicalField> {
    return await this.technicalFieldsRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateTechnicalFieldDto: UpdateTechnicalFieldDto[]) {
    return await this.technicalFieldsRepository.save(updateTechnicalFieldDto);
  }
}
