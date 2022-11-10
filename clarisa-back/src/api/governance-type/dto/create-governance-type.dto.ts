import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateGovernanceTypeDto extends AuditableDto {
  name: string;
}
