import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateCgiarEntityTypeDto extends AuditableDto {
  name: string;
}
