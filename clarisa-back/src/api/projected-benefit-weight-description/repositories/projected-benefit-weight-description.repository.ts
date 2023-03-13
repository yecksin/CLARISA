import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ProjectedBenefitWeightDescription } from '../entities/projected-benefit-weight-description.entity';

@Injectable()
export class ProjectedBenefitWeightDescriptionRepository extends Repository<ProjectedBenefitWeightDescription> {
  constructor(private dataSource: DataSource) {
    super(ProjectedBenefitWeightDescription, dataSource.createEntityManager());
  }
}
