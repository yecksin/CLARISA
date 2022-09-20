import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateGovernanceTypeDto extends AuditableDto {
  name: string;
}
