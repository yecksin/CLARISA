import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InstitutionLocation } from '../entities/institution-location.entity';

@Injectable()
export class InstitutionLocationRepository extends Repository<InstitutionLocation> {
  constructor(private dataSource: DataSource) {
    super(InstitutionLocation, dataSource.createEntityManager());
  }
}
