import { RegionDto } from 'src/api/region/dto/region.dto';

export class CountryDto {
  code: number;
  isoAlpha2: string;
  isoAlpha3: string;
  name: string;
  regionDTO: RegionDto;
}
