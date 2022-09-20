import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectedBenefitWeightDescriptionDto } from './create-projected-benefit-weight-description.dto';

export class UpdateProjectedBenefitWeightDescriptionDto extends PartialType(
  CreateProjectedBenefitWeightDescriptionDto,
) {
  id: number;
}
