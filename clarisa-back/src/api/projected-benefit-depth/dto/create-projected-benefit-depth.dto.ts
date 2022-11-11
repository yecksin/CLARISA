import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateProjectedBenefitDepthDto extends AuditableDto {
  projected_benefits_id: number;

  depth_description_id: number;
}
