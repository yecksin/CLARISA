import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateInstitutionBulkDto extends AuditableDto {
  name: string;

  acronym: string;

  website_link: string;

  institution_type: string;

  country: number;

  create_by: number;
}
