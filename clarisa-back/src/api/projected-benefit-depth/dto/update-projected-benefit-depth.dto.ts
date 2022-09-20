import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectedBenefitDepthDto } from './create-projected-benefit-depth.dto';

export class UpdateProjectedBenefitDepthDto extends PartialType(
  CreateProjectedBenefitDepthDto,
) {
  id: number;
}
