import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { ProjectedBenefitWeightDescription } from '../entities/projected-benefit-weight-description.entity';

@Injectable()
export class ProjectedBenefitWeightDescriptionRepository extends Repository<ProjectedBenefitWeightDescription> {
  constructor(private dataSource: DataSource) {
    super(ProjectedBenefitWeightDescription, dataSource.createEntityManager());
  }
}
