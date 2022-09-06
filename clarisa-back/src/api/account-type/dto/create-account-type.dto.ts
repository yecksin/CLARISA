import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateAccountTypeDto extends AuditableDto {
  name: string;
  acronym: string;
}
