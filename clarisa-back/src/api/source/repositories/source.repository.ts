import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { Source } from '../entities/source.entity';

@Injectable()
export class SourceRepository extends Repository<Source> {
  constructor(private dataSource: DataSource) {
    super(Source, dataSource.createEntityManager());
  }
}
