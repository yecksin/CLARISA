import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { AccountRepository } from './repositories/account.repository';
import { AccountMapper } from './mappers/account.mapper';
import { AccountTypeMapper } from '../account-type/mappers/account-type.mapper';

@Module({
  controllers: [AccountController],
  providers: [
    AccountService,
    AccountRepository,
    AccountMapper,
    AccountTypeMapper,
  ],
})
export class AccountModule {}
