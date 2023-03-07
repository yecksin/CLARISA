import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { EnvironmentalBenefit } from '../entities/environmental-benefit.entity';

@Injectable()
export class EnvironmentalBenefitRepository extends Repository<EnvironmentalBenefit> {
  constructor(private dataSource: DataSource) {
    super(EnvironmentalBenefit, dataSource.createEntityManager());
  }
}
