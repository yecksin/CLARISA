import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { InstitutionRepository } from '../institution/repositories/institution.repository';
import { InstitutionDictionaryDto } from './dto/institution-dictionary.dto';
import { UpdateInstitutionDictionaryDto } from './dto/update-institution-dictionary.dto';
import { InstitutionDictionary } from './entities/institution-dictionary.entity';

@Injectable()
export class InstitutionDictionaryService {
  constructor(
    private institutionRepository: InstitutionRepository,
    @InjectRepository(InstitutionDictionary)
    private institutionDictionaryRepository: Repository<InstitutionDictionary>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<InstitutionDictionaryDto[]> {
    if (!Object.values<string>(FindAllOptions).includes(option)) {
      throw Error('?!');
    }

    return this.institutionRepository.findAllInstitutionSourceEntries(option);
  }

  async findOne(id: number): Promise<InstitutionDictionary> {
    return await this.institutionDictionaryRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(
    updateInstitutionDictionaryDto: UpdateInstitutionDictionaryDto[],
  ) {
    return await this.institutionDictionaryRepository.save(
      updateInstitutionDictionaryDto,
    );
  }
}
