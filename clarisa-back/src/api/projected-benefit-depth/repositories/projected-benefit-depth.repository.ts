import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { ProjectedBenefitDepth } from '../entities/projected-benefit-depth.entity';

@Injectable()
export class ProjectedBenefitDepthRepository extends Repository<ProjectedBenefitDepth> {
  constructor(private dataSource: DataSource) {
    super(ProjectedBenefitDepth, dataSource.createEntityManager());
  }
}
