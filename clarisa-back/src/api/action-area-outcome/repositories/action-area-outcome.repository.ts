import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ActionAreaOutcome } from '../entities/action-area-outcome.entity';

@Injectable()
export class ActionAreaOutcomeRepository extends Repository<ActionAreaOutcome> {
  constructor(private dataSource: DataSource) {
    super(ActionAreaOutcome, dataSource.createEntityManager());
  }
}
