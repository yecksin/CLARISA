import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreatePolicyTypeDto extends AuditableDto {
  name: string;

  definition: string;

  source_id: number;
}
