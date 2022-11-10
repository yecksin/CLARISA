import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateDepthDescriptionDto extends AuditableDto {
  name: string;
}
