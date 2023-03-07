import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { ProjectedBenefitProbability } from '../entities/projected-benefit-probability.entity';

@Injectable()
export class ProjectedBenefitProbabilityRepository extends Repository<ProjectedBenefitProbability> {
  constructor(private dataSource: DataSource) {
    super(ProjectedBenefitProbability, dataSource.createEntityManager());
  }
}
