import { Module } from '@nestjs/common';
import { AccountTypeService } from './account-type.service';
import { AccountTypeController } from './account-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountType } from './entities/account-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountType])],
  controllers: [AccountTypeController],
  providers: [AccountTypeService],
})
export class AccountTypeModule {}
