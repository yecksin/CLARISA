import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateProjectedBenefitDto extends AuditableDto {
  impact_area_indicator_id: number;

  description: string;
}
