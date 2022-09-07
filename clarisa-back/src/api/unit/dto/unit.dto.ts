import { BasicDto } from 'src/shared/entities/dtos/basic-dto';
import { UnitTypeDto } from './unit-type.dto';

export class UnitDto {
  code: number;
  description: string;
  financialCode: string;
  unitType: UnitTypeDto;
  scienceGroup: BasicDto;
  parent: BasicDto;
}
