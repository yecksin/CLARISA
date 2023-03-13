import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Mis } from '../entities/mis.entity';

@Injectable()
export class MisRepository extends Repository<Mis> {
  constructor(private dataSource: DataSource) {
    super(Mis, dataSource.createEntityManager());
  }
}
