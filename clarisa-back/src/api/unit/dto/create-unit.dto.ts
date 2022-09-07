import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateUnitDto extends AuditableDto {
  financial_code: string;

  description: string;

  parent_id: number;

  science_group_id: number;

  unit_type_id: number;
}
