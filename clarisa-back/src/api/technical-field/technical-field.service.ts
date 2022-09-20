import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { UpdateTechnicalFieldDto } from './dto/update-technical-field.dto';
import { TechnicalField } from './entities/technical-field.entity';

@Injectable()
export class TechnicalFieldService {
  constructor(
    @InjectRepository(TechnicalField)
    private technicalFieldsRepository: Repository<TechnicalField>,
  ) {}

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
