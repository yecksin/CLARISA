import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { Glossary } from '../entities/glossary.entity';

@Injectable()
export class GlossaryRepository extends Repository<Glossary> {
  constructor(private dataSource: DataSource) {
    super(Glossary, dataSource.createEntityManager());
  }
}
