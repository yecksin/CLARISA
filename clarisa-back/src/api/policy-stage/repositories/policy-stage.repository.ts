import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { PolicyStage } from '../entities/policy-stage.entity';

@Injectable()
export class PolicyStageRepository extends Repository<PolicyStage> {
  constructor(private dataSource: DataSource) {
    super(PolicyStage, dataSource.createEntityManager());
  }
}
