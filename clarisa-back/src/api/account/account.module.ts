import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { AccountRepository } from './repositories/account.repository';

@Module({
  controllers: [AccountController],
  providers: [AccountService, AccountRepository],
})
export class AccountModule {}
