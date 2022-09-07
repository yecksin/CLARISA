import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateCgiarEntityTypeDto extends AuditableDto {
  name: string;
}
