import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { EndOfInitiativeOutcome } from '../entities/end-of-initiative-outcome.entity';

@Injectable()
export class EndOfInitiativeOutcomeRepository extends Repository<EndOfInitiativeOutcome> {
  constructor(private dataSource: DataSource) {
    super(EndOfInitiativeOutcome, dataSource.createEntityManager());
  }
}
