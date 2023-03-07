import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { EndOfInitiativeOutcome } from '../entities/end-of-initiative-outcome.entity';

@Injectable()
export class EndOfInitiativeOutcomeRepository extends Repository<EndOfInitiativeOutcome> {
  constructor(private dataSource: DataSource) {
    super(EndOfInitiativeOutcome, dataSource.createEntityManager());
  }
}
