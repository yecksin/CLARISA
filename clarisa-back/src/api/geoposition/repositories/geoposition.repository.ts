import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Geoposition } from '../entities/geoposition.entity';

@Injectable()
export class GeopositionRepository extends Repository<Geoposition> {
  constructor(private dataSource: DataSource) {
    super(Geoposition, dataSource.createEntityManager());
  }
}
