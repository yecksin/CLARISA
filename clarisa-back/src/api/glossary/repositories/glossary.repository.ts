import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Glossary } from '../entities/glossary.entity';

@Injectable()
export class GlossaryRepository extends Repository<Glossary> {
  constructor(private dataSource: DataSource) {
    super(Glossary, dataSource.createEntityManager());
  }
}
