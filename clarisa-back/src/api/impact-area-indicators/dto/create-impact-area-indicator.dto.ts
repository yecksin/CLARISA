import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateImpactAreaIndicatorDto extends AuditableDto {
  indicator_statement: string;

  target_year: number;

  target_unit: string;

  is_aplicable_projected_benefits: boolean;

  smo_code: string;
}
