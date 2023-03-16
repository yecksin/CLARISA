import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Stage } from '../entities/status.entity';

@Injectable()
export class StageRepository extends Repository<Stage> {
  constructor(private dataSource: DataSource) {
    super(Stage, dataSource.createEntityManager());
  }
}
