import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateInitiativeDto extends AuditableDto {
  name: string;

  official_code: string;

  acronym: string;
}
