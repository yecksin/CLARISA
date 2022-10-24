import { SimpleRegionDto } from 'src/api/region/dto/simple-region.dto';

export class CountryDto {
  code: number;
  isoAlpha2: string;
  isoAlpha3: string;
  name: string;
  regionDTO: SimpleRegionDto;
}
