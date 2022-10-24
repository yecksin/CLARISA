import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateInstitutionDictionaryDto extends AuditableDto {
  institution_id: number;

  source_id: number;

  institution_source_id: string;

  institution_source_name: string;
}
