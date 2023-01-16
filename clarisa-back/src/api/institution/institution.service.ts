import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { InstitutionSimpleDto } from './dto/institution-simple.dto';
import { InstitutionDto } from './dto/institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { Institution } from './entities/institution.entity';
import { InstitutionRepository } from './repositories/institution.repository';
import { CreateInstitutionBulkDto } from './dto/institution-bulk.dto';

@Injectable()
export class InstitutionService {
  constructor(private institutionRepository: InstitutionRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
    from: string = undefined,
  ): Promise<InstitutionDto[]> {
    if (!Object.values<string>(FindAllOptions).includes(option)) {
      throw Error('?!');
    }

    if (from != null && Number.isNaN(from)) {
      throw Error('?!');
    } else {
      return this.institutionRepository.findAllInstitutions(option, from);
    }
  }

  async findAllSimple(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<InstitutionSimpleDto[]> {
    if (!Object.values<string>(FindAllOptions).includes(option)) {
      throw Error('?!');
    }

    return this.institutionRepository.findAllInstitutionsSimple(option);
  }

  async findOne(id: number): Promise<Institution> {
    return await this.institutionRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateInitiativeDto: UpdateInstitutionDto[]) {
    return await this.institutionRepository.save(updateInitiativeDto);
  }
}
