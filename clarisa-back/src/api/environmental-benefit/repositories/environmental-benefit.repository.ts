import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { EnvironmentalBenefit } from '../entities/environmental-benefit.entity';

@Injectable()
export class EnvironmentalBenefitRepository extends Repository<EnvironmentalBenefit> {
  constructor(private dataSource: DataSource) {
    super(EnvironmentalBenefit, dataSource.createEntityManager());
  }
}
