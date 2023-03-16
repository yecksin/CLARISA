import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ProjectedBenefitProbability } from '../entities/projected-benefit-probability.entity';

@Injectable()
export class ProjectedBenefitProbabilityRepository extends Repository<ProjectedBenefitProbability> {
  constructor(private dataSource: DataSource) {
    super(ProjectedBenefitProbability, dataSource.createEntityManager());
  }
}
