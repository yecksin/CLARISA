import { Injectable } from '@nestjs/common';
import { ApiOST } from 'src/shared/integration/ost/api.ost';
import { firstValueFrom } from 'rxjs';
import { CreateEndOfInitiativeOutcomeDto } from './dto/create-end-of-initiative-outcome.dto';
import { UpdateEndOfInitiativeOutcomeDto } from './dto/update-end-of-initiative-outcome.dto';

@Injectable()
export class EndOfInitiativeOutcomesService {
  constructor(private apiOst: ApiOST) {}

  async findAll() {
    let response: any = await firstValueFrom(this.apiOst.getEndOfIniciative());

    response = response?.data?.response?.eoi_outcome_by_initiatives ?? [];

    return response;
  }
}
