import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InnovationReadinessLevel } from '../entities/innovation-readiness-level.entity';

@Injectable()
export class InnovationReadinessLevelRepository extends Repository<InnovationReadinessLevel> {
  constructor(private dataSource: DataSource) {
    super(InnovationReadinessLevel, dataSource.createEntityManager());
  }
}
