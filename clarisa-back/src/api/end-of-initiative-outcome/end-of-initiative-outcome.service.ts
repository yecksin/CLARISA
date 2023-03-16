import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ApiOST } from '../../shared/integration/ost/api.ost';

@Injectable()
export class EndOfInitiativeOutcomeService {
  constructor(private apiOst: ApiOST) {}

  async findAll() {
    let response: any = await firstValueFrom(this.apiOst.getEndOfIniciative());

    response = response?.data?.response?.eoi_outcome_by_initiatives ?? [];

    return response;
  }
}
