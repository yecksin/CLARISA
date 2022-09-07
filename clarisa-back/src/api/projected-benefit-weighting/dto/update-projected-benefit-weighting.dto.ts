import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectedBenefitWeightingDto } from './create-projected-benefit-weighting.dto';

export class UpdateProjectedBenefitWeightingDto extends PartialType(
  CreateProjectedBenefitWeightingDto,
) {
  id: number;
}
