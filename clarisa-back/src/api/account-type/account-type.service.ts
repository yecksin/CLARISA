import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateAccountTypeDto } from './dto/update-account-type.dto';
import { AccountType } from './entities/account-type.entity';

@Injectable()
export class AccountTypeService {
  constructor(
    @InjectRepository(AccountType)
    private accountTypesRepository: Repository<AccountType>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<AccountType[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.accountTypesRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.accountTypesRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<AccountType> {
    return await this.accountTypesRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(
    updateUserDtoList: UpdateAccountTypeDto[],
  ): Promise<AccountType[]> {
    return await this.accountTypesRepository.save(updateUserDtoList);
  }
}
