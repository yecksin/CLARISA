import { Module } from '@nestjs/common';
import { AccountTypeService } from './account-type.service';
import { AccountTypeController } from './account-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountType } from './entities/account-type.entity';
import { AccountTypeRepository } from './repositories/account-type.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AccountType])],
  controllers: [AccountTypeController],
  providers: [AccountTypeService, AccountTypeRepository],
})
export class AccountTypeModule {}
