import { Injectable } from '@nestjs/common';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { RegionMapping } from '../entities/region-mapping.entity';

@Injectable()
export class RegionMappingRepository extends Repository<RegionMapping> {
  constructor(private dataSource: DataSource) {
    super(RegionMapping, dataSource.createEntityManager());
  }
}
