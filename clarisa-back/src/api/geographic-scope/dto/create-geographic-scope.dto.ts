import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateGeographicScopeDto extends AuditableDto {
  name: string;

  iati_name: string;

  definition: string;

  is_onecgiar: boolean;

  is_legacy: boolean;
}
