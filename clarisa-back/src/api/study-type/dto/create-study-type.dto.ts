import { AuditableDto } from "src/shared/entities/dtos/auditable-dto";

export class CreateStudyTypeDto extends AuditableDto {
  id: number;

  name: string;

  description: string;

  norder: number;
}
