import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { InstitutionDictionary } from '../entities/institution-dictionary.entity';

@Injectable()
export class InstitutionDictionaryRepository extends Repository<InstitutionDictionary> {
  constructor(private dataSource: DataSource) {
    super(InstitutionDictionary, dataSource.createEntityManager());
  }
}
