import { PartialType } from '@nestjs/mapped-types';
import { CreateOutcomeIndicatorDto } from './create-outcome-indicator.dto';

export class UpdateOutcomeIndicatorDto extends PartialType(
  CreateOutcomeIndicatorDto,
) {
  id: number;
}
