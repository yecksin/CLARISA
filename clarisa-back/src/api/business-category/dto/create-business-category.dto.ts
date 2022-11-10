import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateBusinessCategoryDto extends AuditableDto {
  name: string;
}
