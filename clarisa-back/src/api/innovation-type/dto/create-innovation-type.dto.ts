import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateInnovationTypeDto extends AuditableDto {
  name: string;

  definition: string;

  is_onecgiar: boolean;

  is_marlo: boolean;
}
