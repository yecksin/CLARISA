import { Injectable } from '@nestjs/common';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { FindAllOptions } from '../../../shared/entities/enums/find-all-options';
import { UnitDto } from '../dto/unit.dto';
import { UnitType } from '../entities/unit-type.entity';

@Injectable()
export class UnitTypeRepository extends Repository<UnitType> {
  constructor(private dataSource: DataSource) {
    super(UnitType, dataSource.createEntityManager());
  }
}
