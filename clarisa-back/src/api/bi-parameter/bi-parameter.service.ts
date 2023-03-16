import { Injectable } from '@nestjs/common/decorators';
import { FindOptionsWhere } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateBiParameterDto } from './dto/update-bi-parameter.dto';
import { BiParameter } from './entities/bi-parameter.entity';
import { BiParameterRepository } from './repositories/bi-parameter.repository';
import { ParametersBiUnit } from './dto/parameter-unit-bi.dto';
@Injectable()
export class BiParameterService {
  constructor(private biParametersRepository: BiParameterRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<BiParameter[]> {
    let whereClause: FindOptionsWhere<BiParameter> = {};

    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.biParametersRepository.find({
          where: whereClause,
        });
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        whereClause = {
          ...whereClause,
          auditableFields: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        };
        return await this.biParametersRepository.find({
          where: whereClause,
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<BiParameter> {
    return await this.biParametersRepository.findOneBy({
      id,
      auditableFields: { is_active: true },
    });
  }

  async update(updateBiParameterDto: UpdateBiParameterDto[]) {
    return await this.biParametersRepository.save(updateBiParameterDto);
  }

  async findAllUnitParametersBi(): Promise<ParametersBiUnit> {
    return await this.biParametersRepository.getFindAllInformation();
  }
}
