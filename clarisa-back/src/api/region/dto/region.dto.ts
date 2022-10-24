import { SimpleCountryDto } from 'src/api/country/dto/simple-country.dto';
import { ParentRegionDto } from './parent-region.dto';

export class RegionDto {
  id: number;
  name: string;
  acronym: string;
  um49Code: number;
  parentRegion: ParentRegionDto;
  countries: SimpleCountryDto[];
}
