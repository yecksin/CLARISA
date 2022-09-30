import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { EndOfInitiativeOutcome } from '../entities/end-of-initiative-outcome.entity';
import { ApiOST } from 'src/shared/integration/ost/api.ost';
import { CreateEndOfInitiativeOutcomeDto } from '../dto/create-end-of-initiative-outcome.dto';

@Injectable()
export class EndOfInitiativeOutcomeRepository extends Repository<EndOfInitiativeOutcome> {
  requestEndpoint: CreateEndOfInitiativeOutcomeDto;
  constructor(
    private dataSource: DataSource,
    private apiOstRepository: ApiOST,
  ) {
    super(EndOfInitiativeOutcome, dataSource.createEntityManager());
    this.apiOstRepository
      .getEndOfIniciative()
      .subscribe(
        async (response) =>
          await (this.requestEndpoint =
            response.data.response.eoi_outcome_by_initiatives),
      );
  }

  async findAllEndOfInitiativeOutcome() {
    return this.requestEndpoint;
  }
}
