import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { Beneficiary } from '../entities/beneficiary.entity';

@Injectable()
export class BeneficiaryRepository extends Repository<Beneficiary> {
  constructor(private dataSource: DataSource) {
    super(Beneficiary, dataSource.createEntityManager());
  }
}
