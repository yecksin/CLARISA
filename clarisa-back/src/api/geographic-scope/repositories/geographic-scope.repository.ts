import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { GeographicScope } from '../entities/geographic-scope.entity';

@Injectable()
export class GeographicScopeRepository extends Repository<GeographicScope> {
  constructor(private dataSource: DataSource) {
    super(GeographicScope, dataSource.createEntityManager());
  }
}
