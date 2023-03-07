import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { CgiarEntity } from '../entities/cgiar-entity.entity';

@Injectable()
export class CgiarEntityRepository extends Repository<CgiarEntity> {
  constructor(private dataSource: DataSource) {
    super(CgiarEntity, dataSource.createEntityManager());
  }
}
