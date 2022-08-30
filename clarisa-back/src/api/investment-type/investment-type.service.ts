import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { UpdateInvestmentTypeDto } from './dto/update-investment-type.dto';
import { InvestmentType } from './entities/investment-type.entity';

@Injectable()
export class InvestmentTypeService {
  constructor(
    @InjectRepository(InvestmentType)
    private investmentTypeRepository: Repository<InvestmentType>,
  ) {}

  async findAll(option : FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE) : Promise<InvestmentType[]> {
    switch(option){
      case FindAllOptions.SHOW_ALL:
        return await this.investmentTypeRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.investmentTypeRepository.find({
          where: {
            is_active : option === FindAllOptions.SHOW_ONLY_ACTIVE
          }
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<InvestmentType> {
    return await this.investmentTypeRepository.findOneBy({
      id,
      is_active : true
    });
  }

  async update(updateInvestmentTypeDtoList: UpdateInvestmentTypeDto[]) : Promise<InvestmentType[]> {
    return await this.investmentTypeRepository.save(updateInvestmentTypeDtoList);
  }
}
