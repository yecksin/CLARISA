import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateGeographicScopeDto extends AuditableDto {
  name: string;

  iati_name: string;

  definition: string;

  source_id: number;
}
