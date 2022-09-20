import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UnitDto } from './dto/unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { Unit } from './entities/unit.entity';
import { UnitRepository } from './repositories/unit.repository';

@Injectable()
export class UnitService {
  constructor(private unitsRepository: UnitRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<UnitDto[]> {
    if (!Object.values<string>(FindAllOptions).includes(option)) {
      throw Error('?!');
    }

    return this.unitsRepository.findAllUnits(option);
  }

  async findOne(id: number): Promise<Unit> {
    return await this.unitsRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateUserDtoList: UpdateUnitDto[]): Promise<Unit[]> {
    return await this.unitsRepository.save(updateUserDtoList);
  }
}
