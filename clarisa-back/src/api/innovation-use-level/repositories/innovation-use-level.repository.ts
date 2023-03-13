import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InnovationUseLevel } from '../entities/innovation-use-level.entity';

@Injectable()
export class InnovationUseLevelRepository extends Repository<InnovationUseLevel> {
  constructor(private dataSource: DataSource) {
    super(InnovationUseLevel, dataSource.createEntityManager());
  }
}
