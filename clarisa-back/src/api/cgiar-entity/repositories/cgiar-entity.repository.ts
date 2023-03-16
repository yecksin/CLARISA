import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CgiarEntity } from '../entities/cgiar-entity.entity';

@Injectable()
export class CgiarEntityRepository extends Repository<CgiarEntity> {
  constructor(private dataSource: DataSource) {
    super(CgiarEntity, dataSource.createEntityManager());
  }
}
