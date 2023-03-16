import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateSourceDto extends AuditableDto {
  name: string;

  acronym: string;

  contact_point_id: string;
}
