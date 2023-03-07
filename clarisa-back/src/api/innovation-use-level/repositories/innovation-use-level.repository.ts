import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { InnovationUseLevel } from '../entities/innovation-use-level.entity';

@Injectable()
export class InnovationUseLevelRepository extends Repository<InnovationUseLevel> {
  constructor(private dataSource: DataSource) {
    super(InnovationUseLevel, dataSource.createEntityManager());
  }
}
