import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateHomepageClarisaCategoryDto extends AuditableDto {
  name: string;

  description: string;

  parent_id: number;
}
