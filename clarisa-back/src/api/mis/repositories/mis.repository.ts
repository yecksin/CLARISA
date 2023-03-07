import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { Mis } from '../entities/mis.entity';

@Injectable()
export class MisRepository extends Repository<Mis> {
  constructor(private dataSource: DataSource) {
    super(Mis, dataSource.createEntityManager());
  }
}
