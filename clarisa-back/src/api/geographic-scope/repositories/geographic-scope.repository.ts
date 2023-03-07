import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { GeographicScope } from '../entities/geographic-scope.entity';

@Injectable()
export class GeographicScopeRepository extends Repository<GeographicScope> {
  constructor(private dataSource: DataSource) {
    super(GeographicScope, dataSource.createEntityManager());
  }
}
