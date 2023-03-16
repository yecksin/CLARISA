import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { PolicyStage } from '../entities/policy-stage.entity';

@Injectable()
export class PolicyStageRepository extends Repository<PolicyStage> {
  constructor(private dataSource: DataSource) {
    super(PolicyStage, dataSource.createEntityManager());
  }
}
