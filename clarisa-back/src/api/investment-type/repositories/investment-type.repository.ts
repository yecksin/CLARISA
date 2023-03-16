import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InvestmentType } from '../entities/investment-type.entity';

@Injectable()
export class InvestmentTypeRepository extends Repository<InvestmentType> {
  constructor(private dataSource: DataSource) {
    super(InvestmentType, dataSource.createEntityManager());
  }
}
