import { Module } from '@nestjs/common';
import { AccountTypeService } from './account-type.service';
import { AccountTypeController } from './account-type.controller';
import { AccountTypeRepository } from './repositories/account-type.repository';
import { AccountTypeMapper } from './mappers/account-type.mapper';

@Module({
  controllers: [AccountTypeController],
  providers: [AccountTypeService, AccountTypeRepository, AccountTypeMapper],
  exports: [AccountTypeMapper],
})
export class AccountTypeModule {}
