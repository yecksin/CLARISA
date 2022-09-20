import { PartialType } from '@nestjs/mapped-types';
import { CreateGeopositionDto } from './create-geoposition.dto';

export class UpdateGeopositionDto extends PartialType(CreateGeopositionDto) {
  id: number;
}
