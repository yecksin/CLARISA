import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateProjectedBenefitProbabilityDto extends AuditableDto {
  name: string;

  description: string;
}
