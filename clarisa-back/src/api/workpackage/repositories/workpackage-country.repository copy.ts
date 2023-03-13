import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { WorkpackageRegion } from '../entities/workpackage-region.entity';

@Injectable()
export class WorkpackageRegionRepository extends Repository<WorkpackageRegion> {
  constructor(private dataSource: DataSource) {
    super(WorkpackageRegion, dataSource.createEntityManager());
  }
}
