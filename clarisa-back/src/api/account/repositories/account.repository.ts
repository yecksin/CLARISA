import { Injectable } from '@nestjs/common';
import { AccountTypeDto } from 'src/api/account-type/dto/account-type.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { AccountDto } from '../dto/account.dto';
import { ParentAccountDto } from '../dto/parent-account.dto';
import { Account } from '../entities/account.entity';

@Injectable()
export class AccountRepository extends Repository<Account> {
  constructor(private dataSource: DataSource) {
    super(Account, dataSource.createEntityManager());
  }

  async findAllAccounts(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<AccountDto[]> {
    let whereClause: FindOptionsWhere<Account> = {};
    let accountDtos: AccountDto[] = [];
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        //do nothing. we will be showing everything, so no condition is needed;
        break;
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        whereClause = {
          is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
        };
        break;
    }

    const accounts: Account[] = await this.find({
      where: whereClause,
    });

    await Promise.all(
      accounts.map(async (a) => {
        let accountDto: AccountDto = new AccountDto();
        accountDto.code = a.id;
        accountDto.description = a.description;
        accountDto.financialCode = a.financial_code;

        accountDto.accountType = await this.createQueryBuilder('a')
          .select('at.id', 'id')
          .addSelect('at.name', 'name')
          .leftJoin('a.account_type', 'at')
          .where('a.id = :accountId', { accountId: a.id })
          .getRawOne();

        accountDto.parent = a.parent_id
          ? await this.createQueryBuilder('a')
              .select('a.id', 'code')
              .addSelect('a.description', 'description')
              .where('a.id = :accountId', { accountId: a.parent_id })
              .getRawOne()
          : null;

        accountDtos.push(accountDto);
      }),
    );

    return accountDtos.sort((a, b) => a.code - b.code);
  }
}
