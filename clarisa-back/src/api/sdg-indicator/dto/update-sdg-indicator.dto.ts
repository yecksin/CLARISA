import { PartialType } from '@nestjs/mapped-types';
import { CreateSdgIndicatorDto } from './create-sdg-indicator.dto';

export class UpdateSdgIndicatorDto extends PartialType(CreateSdgIndicatorDto) {
  id: number;
}
