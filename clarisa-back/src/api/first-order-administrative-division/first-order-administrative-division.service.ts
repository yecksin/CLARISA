import { Injectable } from '@nestjs/common';
import { CreateFirstOrderAdministrativeDivisionDto } from './dto/create-first-order-administrative-division.dto';
import { UpdateFirstOrderAdministrativeDivisionDto } from './dto/update-first-order-administrative-division.dto';
import { ApiGeoNames } from '../../shared/integration/ost/api.geonames';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class FirstOrderAdministrativeDivisionService {

  constructor(
    private readonly geoNames: ApiGeoNames
  ) { }

  async findIsoAlpha2(isoAlpha2: string) {
    return await firstValueFrom(this.geoNames.getFirstOrder(isoAlpha2).pipe(map((resp) => resp.data)));
  }
}
