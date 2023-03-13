import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InstitutionDictionary } from '../entities/institution-dictionary.entity';

@Injectable()
export class InstitutionDictionaryRepository extends Repository<InstitutionDictionary> {
  constructor(private dataSource: DataSource) {
    super(InstitutionDictionary, dataSource.createEntityManager());
  }
}
