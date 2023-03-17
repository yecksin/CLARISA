import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ProjectedBenefitDepth } from '../entities/projected-benefit-depth.entity';

@Injectable()
export class ProjectedBenefitDepthRepository extends Repository<ProjectedBenefitDepth> {
  constructor(private dataSource: DataSource) {
    super(ProjectedBenefitDepth, dataSource.createEntityManager());
  }
}
