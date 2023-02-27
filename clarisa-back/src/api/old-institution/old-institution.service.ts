import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { InstitutionSimpleDto } from '../institution/dto/institution-simple.dto';
import { InstitutionDto } from '../institution/dto/institution.dto';
import { CreateOldInstitutionDto } from './dto/create-old-institution.dto';
import { UpdateOldInstitutionDto } from './dto/update-old-institution.dto';
import { OldInstitution } from './entities/old-institution.entity';
import { OldInstitutionRepository } from './old-institution.repository';

@Injectable()
export class OldInstitutionService {
  constructor(private oldInstitutionRepository: OldInstitutionRepository) {}

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
      return this.oldInstitutionRepository.findAllInstitutions(option, from);
    }
  }

  async findAllSimple(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<InstitutionSimpleDto[]> {
    if (!Object.values<string>(FindAllOptions).includes(option)) {
      throw Error('?!');
    }

    return this.oldInstitutionRepository.findAllInstitutionsSimple(option);
  }

  async findOne(id: number): Promise<OldInstitution> {
    return await this.oldInstitutionRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateInitiativeDto: UpdateOldInstitutionDto[]) {
    return await this.oldInstitutionRepository.save(updateInitiativeDto);
  }
}
