import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { CgiarEntityType } from '../entities/cgiar-entity-type.entity';

@Injectable()
export class CgiarEntityTypeRepository extends Repository<CgiarEntityType> {
  constructor(private dataSource: DataSource) {
    super(CgiarEntityType, dataSource.createEntityManager());
  }
}
