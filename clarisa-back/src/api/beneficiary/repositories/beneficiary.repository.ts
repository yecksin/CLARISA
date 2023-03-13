import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Beneficiary } from '../entities/beneficiary.entity';

@Injectable()
export class BeneficiaryRepository extends Repository<Beneficiary> {
  constructor(private dataSource: DataSource) {
    super(Beneficiary, dataSource.createEntityManager());
  }
}
