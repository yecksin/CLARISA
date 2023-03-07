import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { ProjectedBenefitWeighting } from '../entities/projected-benefit-weighting.entity';

@Injectable()
export class ProjectedBenefitWeightingRepository extends Repository<ProjectedBenefitWeighting> {
  constructor(private dataSource: DataSource) {
    super(ProjectedBenefitWeighting, dataSource.createEntityManager());
  }
}
