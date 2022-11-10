import { RegionDto } from '../../region/dto/region.dto';

export class InstitutionCountryDto {
  code: number;
  isoAlpha2: string;
  name: string;
  isHeadquarter: boolean;
  regionDTO: RegionDto = null;
}
