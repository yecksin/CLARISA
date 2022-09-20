import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectedBenefitProbabilityDto } from './create-projected-benefit-probability.dto';

export class UpdateProjectedBenefitProbabilityDto extends PartialType(
  CreateProjectedBenefitProbabilityDto,
) {
  id: number;
}
