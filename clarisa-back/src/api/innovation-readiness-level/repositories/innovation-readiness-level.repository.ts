import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { InnovationReadinessLevel } from '../entities/innovation-readiness-level.entity';

@Injectable()
export class InnovationReadinessLevelRepository extends Repository<InnovationReadinessLevel> {
  constructor(private dataSource: DataSource) {
    super(InnovationReadinessLevel, dataSource.createEntityManager());
  }
}
