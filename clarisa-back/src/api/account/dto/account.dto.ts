import { AccountTypeDto } from 'src/api/account-type/dto/account-type.dto';
import { ParentAccountDto } from './parent-account.dto';

export class AccountDto {
  code: number;
  description: string;
  financialCode: string;
  accountType: AccountTypeDto;
  parent: ParentAccountDto;
}
