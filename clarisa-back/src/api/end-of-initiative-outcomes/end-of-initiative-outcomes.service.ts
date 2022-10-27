import { Injectable } from '@nestjs/common';
import { ApiOST } from 'src/shared/integration/ost/api.ost';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class EndOfInitiativeOutcomesService {
  constructor(private apiOst: ApiOST) {}

  async findAll() {
    let response: any = await firstValueFrom(this.apiOst.getEndOfIniciative());

    response = response?.data?.response?.eoi_outcome_by_initiatives ?? [];

    return response;
  }
}
