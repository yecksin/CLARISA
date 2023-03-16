import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Source } from '../entities/source.entity';

@Injectable()
export class SourceRepository extends Repository<Source> {
  constructor(private dataSource: DataSource) {
    super(Source, dataSource.createEntityManager());
  }
}
