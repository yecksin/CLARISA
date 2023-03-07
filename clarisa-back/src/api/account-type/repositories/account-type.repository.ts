import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { AccountType } from '../entities/account-type.entity';

@Injectable()
export class AccountTypeRepository extends Repository<AccountType> {
  constructor(private dataSource: DataSource) {
    super(AccountType, dataSource.createEntityManager());
  }
}
