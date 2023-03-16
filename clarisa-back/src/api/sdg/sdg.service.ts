import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { LegacySdgDto } from './dto/legacy-sdg.dto';
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
    isLegacy: boolean = false,
  ) {
    let response: Sdg[];
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        response = await this.sdgsRepository.find();
        break;
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        response = await this.sdgsRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
        break;
      default:
        throw Error('?!');
    }

    return !isLegacy ? response : this.mapToLegacyResponse(response);
  }

  mapToLegacyResponse(response: Sdg[]): LegacySdgDto[] {
    return response.map((r) => {
      const mappedSdg: LegacySdgDto = new LegacySdgDto();

      mappedSdg.financialCode = r.financial_code;
      mappedSdg.fullName = r.full_name;
      mappedSdg.shortName = r.short_name;
      mappedSdg.usndCode = r.smo_code;

      return mappedSdg;
    });
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
