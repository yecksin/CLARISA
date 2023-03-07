import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { ActionAreaOutcome } from '../entities/action-area-outcome.entity';

@Injectable()
export class ActionAreaOutcomeRepository extends Repository<ActionAreaOutcome> {
  constructor(private dataSource: DataSource) {
    super(ActionAreaOutcome, dataSource.createEntityManager());
  }
}
