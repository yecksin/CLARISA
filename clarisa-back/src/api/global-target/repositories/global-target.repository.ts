import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { GlobalTarget } from '../entities/global-target.entity';

@Injectable()
export class GlobalTargetsRepository extends Repository<GlobalTarget> {
  constructor(private dataSource: DataSource) {
    super(GlobalTarget, dataSource.createEntityManager());
  }
}
