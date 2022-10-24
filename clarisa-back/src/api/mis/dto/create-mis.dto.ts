import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateMisDto extends AuditableDto {
  name: number;

  acronym: string;

  contact_point_id: string;
}
