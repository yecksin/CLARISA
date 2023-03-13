import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ProjectedBenefitWeighting } from '../entities/projected-benefit-weighting.entity';

@Injectable()
export class ProjectedBenefitWeightingRepository extends Repository<ProjectedBenefitWeighting> {
  constructor(private dataSource: DataSource) {
    super(ProjectedBenefitWeighting, dataSource.createEntityManager());
  }
}
