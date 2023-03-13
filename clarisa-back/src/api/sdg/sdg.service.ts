import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateSdgDto } from './dto/update-sdg.dto';
import { Sdg } from './entities/sdg.entity';
import { AllSdgDto } from './dto/allsdg.dto';

@Injectable()
export class SdgService {
  constructor(
    @InjectRepository(Sdg)
    private sdgsRepository: Repository<Sdg>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<Sdg[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.sdgsRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.sdgsRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<Sdg> {
    return await this.sdgsRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateSdgDto: UpdateSdgDto[]) {
    return await this.sdgsRepository.save(updateSdgDto);
  }

  async findAllSdgs(option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,): Promise<AllSdgDto[]>{
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.sdgsRepository.query(`SELECT sdg.smo_code as "usndCode", 
        sdg.short_name as "shortName",
        sdg.full_name as "fullName",
        sdg.financial_code as "financialCode"
      from sustainable_development_goals sdg ;`);
      case FindAllOptions.SHOW_ONLY_ACTIVE:
        return await this.sdgsRepository.query(`SELECT sdg.smo_code as "usndCode", 
        sdg.short_name as "shortName",
        sdg.full_name as "fullName",
        sdg.financial_code as "financialCode"
      from sustainable_development_goals sdg
      WHERE sdg.is_active = 1 ;`);
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.sdgsRepository.query(`SELECT sdg.smo_code as "usndCode", 
        sdg.short_name as "shortName",
        sdg.full_name as "fullName",
        sdg.financial_code as "financialCode"
      from sustainable_development_goals sdg
      WHERE sdg.is_active = 0 ;`);
      default:
        throw Error('?!');
    }
  }
}
