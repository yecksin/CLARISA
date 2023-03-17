import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { WorkpackageCountry } from '../entities/workpackage-country.entity';

@Injectable()
export class WorkpackageCountryRepository extends Repository<WorkpackageCountry> {
  constructor(private dataSource: DataSource) {
    super(WorkpackageCountry, dataSource.createEntityManager());
  }
}
