import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { GlobalTarget } from '../entities/global-target.entity';

@Injectable()
export class GlobalTargetRepository extends Repository<GlobalTarget> {
  constructor(private dataSource: DataSource) {
    super(GlobalTarget, dataSource.createEntityManager());
  }
}
