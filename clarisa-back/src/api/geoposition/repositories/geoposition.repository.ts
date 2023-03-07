import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { Geoposition } from '../entities/geoposition.entity';

@Injectable()
export class GeopositionRepository extends Repository<Geoposition> {
  constructor(private dataSource: DataSource) {
    super(Geoposition, dataSource.createEntityManager());
  }
}
