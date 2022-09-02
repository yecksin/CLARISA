import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateInitiativeDto extends AuditableDto {
  name: string;

  official_code: string;

  acronym: string;
}
