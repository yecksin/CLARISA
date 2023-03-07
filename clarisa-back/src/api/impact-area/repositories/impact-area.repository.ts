import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { ImpactArea } from '../entities/impact-area.entity';

@Injectable()
export class ImpactAreaRepository extends Repository<ImpactArea> {
  constructor(private dataSource: DataSource) {
    super(ImpactArea, dataSource.createEntityManager());
  }
}
