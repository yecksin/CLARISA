import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { InvestmentType } from '../entities/investment-type.entity';

@Injectable()
export class InvestmentTypeRepository extends Repository<InvestmentType> {
  constructor(private dataSource: DataSource) {
    super(InvestmentType, dataSource.createEntityManager());
  }
}
