import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { TechnicalField } from '../entities/technical-field.entity';

@Injectable()
export class TechnicalFieldRepository extends Repository<TechnicalField> {
  constructor(private dataSource: DataSource) {
    super(TechnicalField, dataSource.createEntityManager());
  }
}
