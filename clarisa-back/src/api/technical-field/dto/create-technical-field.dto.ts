import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateTechnicalFieldDto extends AuditableDto {
  name: string;
}
