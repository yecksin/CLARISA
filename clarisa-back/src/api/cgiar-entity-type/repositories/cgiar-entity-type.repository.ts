import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CgiarEntityType } from '../entities/cgiar-entity-type.entity';

@Injectable()
export class CgiarEntityTypeRepository extends Repository<CgiarEntityType> {
  constructor(private dataSource: DataSource) {
    super(CgiarEntityType, dataSource.createEntityManager());
  }
}
