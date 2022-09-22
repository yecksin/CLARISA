import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { AccountDto } from './dto/account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { AccountRepository } from './repositories/account.repository';

@Injectable()
export class AccountService {
  constructor(private accountRepository: AccountRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<AccountDto[]> {
    if (!Object.values<string>(FindAllOptions).includes(option)) {
      throw Error('?!');
    }

    return this.accountRepository.findAllAccounts(option);
  }

  async findOne(id: number): Promise<Account> {
    return await this.accountRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateInitiativeDto: UpdateAccountDto[]) {
    return await this.accountRepository.save(updateInitiativeDto);
  }
}