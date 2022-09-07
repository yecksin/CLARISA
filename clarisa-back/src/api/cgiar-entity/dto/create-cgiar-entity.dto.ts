import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateCgiarEntityDto extends AuditableDto {
  name: string;

  acronym: string;

  smo_code: string;

  financial_code: string;

  global_unit_type_id: number;
}
