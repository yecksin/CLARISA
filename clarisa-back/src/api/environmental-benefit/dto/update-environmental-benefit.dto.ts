import { PartialType } from '@nestjs/mapped-types';
import { CreateEnvironmentalBenefitDto } from './create-environmental-benefit.dto';

export class UpdateEnvironmentalBenefitDto extends PartialType(
  CreateEnvironmentalBenefitDto,
) {
  id: number;
}
