import { ParentRegionDto } from './parent-region.dto';

export class RegionDto {
  name: string;
  parentRegion: ParentRegionDto;
  um49Code: number;
}
