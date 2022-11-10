import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateImpactAreaDto extends AuditableDto {
  name: string;

  description: string;

  financial_code: string;
}
