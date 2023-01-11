import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateBiParameterDto extends AuditableDto {
  id: number;

  parameter_name: string;

  parameter_value: string;
}
