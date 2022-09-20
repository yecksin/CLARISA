import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateScienceGroupDto extends AuditableDto {
  financial_code: string;

  description: string;

  parent_id: number;
}
