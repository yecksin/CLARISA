import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { PolicyType } from '../entities/policy-type.entity';

@Injectable()
export class PolicyTypeRepository extends Repository<PolicyType> {
  constructor(private dataSource: DataSource) {
    super(PolicyType, dataSource.createEntityManager());
  }
}
