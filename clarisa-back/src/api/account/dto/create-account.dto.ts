import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateAccountDto extends AuditableDto {
  financial_code: string;

  description: string;

  account_type_id: number;

  parent_id: number;
}
