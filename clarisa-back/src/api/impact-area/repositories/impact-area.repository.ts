import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ImpactArea } from '../entities/impact-area.entity';

@Injectable()
export class ImpactAreaRepository extends Repository<ImpactArea> {
  constructor(private dataSource: DataSource) {
    super(ImpactArea, dataSource.createEntityManager());
  }
}
