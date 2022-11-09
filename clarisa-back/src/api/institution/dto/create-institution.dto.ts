import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateInstitutionDto extends AuditableDto {
  name: string;

  acronym: string;

  website_link: string;

  institution_type_id: number;

  parent_id: number;
}
