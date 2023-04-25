import { Injectable } from '@nestjs/common';
import { CreateSecondOrderAdministrativeDivisionDto } from './dto/create-second-order-administrative-division.dto';
import { UpdateSecondOrderAdministrativeDivisionDto } from './dto/update-second-order-administrative-division.dto';
import { ApiGeoNames } from '../../shared/integration/ost/api.geonames';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class SecondOrderAdministrativeDivisionService {

  constructor(
    private readonly geoNames: ApiGeoNames
  ) { }

  async findIsoAlpha2AdminCode(isoAlpha2: string, adminCode1: string) {
    return await firstValueFrom(this.geoNames.getSecondOrder(isoAlpha2, adminCode1).pipe(map((resp) => resp.data)));
  }
}
