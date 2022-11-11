import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateRegionTypeDto extends AuditableDto {
  name: string;

  description: string;
}
