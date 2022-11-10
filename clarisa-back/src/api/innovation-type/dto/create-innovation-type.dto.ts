import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateInnovationTypeDto extends AuditableDto {
  name: string;

  definition: string;

  source_id: number;
}
