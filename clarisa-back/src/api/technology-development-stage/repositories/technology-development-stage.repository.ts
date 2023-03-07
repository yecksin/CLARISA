import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { TechnologyDevelopmentStage } from '../entities/technology-development-stage.entity';

@Injectable()
export class TechnologyDevelopmentStageRepository extends Repository<TechnologyDevelopmentStage> {
  constructor(private dataSource: DataSource) {
    super(TechnologyDevelopmentStage, dataSource.createEntityManager());
  }
}
