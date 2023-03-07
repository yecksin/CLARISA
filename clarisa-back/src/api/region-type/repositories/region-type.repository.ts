import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { RegionType } from '../entities/region-type.entity';

@Injectable()
export class RegionTypeRepository extends Repository<RegionType> {
  constructor(private dataSource: DataSource) {
    super(RegionType, dataSource.createEntityManager());
  }
}
