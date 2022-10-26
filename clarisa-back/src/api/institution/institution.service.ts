import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { InstitutionDto } from './dto/institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { Institution } from './entities/institution.entity';
import { InstitutionRepository } from './repositories/institution.repository';

@Injectable()
export class InstitutionService {
  constructor(private institutionRepository: InstitutionRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<InstitutionDto[]> {
    if (!Object.values<string>(FindAllOptions).includes(option)) {
      throw Error('?!');
    }

    return this.institutionRepository.findAllInstitutions(option);
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
