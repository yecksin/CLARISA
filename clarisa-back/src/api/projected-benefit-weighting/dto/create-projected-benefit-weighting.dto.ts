import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateProjectedBenefitWeightingDto extends AuditableDto {
  projected_benefits_id: number;

  weight_description_id: number;

  weight_value: string;
}
