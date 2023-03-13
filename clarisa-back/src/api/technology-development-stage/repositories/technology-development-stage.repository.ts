import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { TechnologyDevelopmentStage } from '../entities/technology-development-stage.entity';

@Injectable()
export class TechnologyDevelopmentStageRepository extends Repository<TechnologyDevelopmentStage> {
  constructor(private dataSource: DataSource) {
    super(TechnologyDevelopmentStage, dataSource.createEntityManager());
  }
}
