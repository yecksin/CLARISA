import { Module } from '@nestjs/common';
import { AccountTypeService } from './account-type.service';
import { AccountTypeController } from './account-type.controller';
import { AccountTypeRepository } from './repositories/account-type.repository';

@Module({
  controllers: [AccountTypeController],
  providers: [AccountTypeService, AccountTypeRepository],
})
export class AccountTypeModule {}
