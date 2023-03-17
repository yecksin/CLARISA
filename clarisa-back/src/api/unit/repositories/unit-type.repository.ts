import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UnitType } from '../entities/unit-type.entity';

@Injectable()
export class UnitTypeRepository extends Repository<UnitType> {
  constructor(private dataSource: DataSource) {
    super(UnitType, dataSource.createEntityManager());
  }
}
