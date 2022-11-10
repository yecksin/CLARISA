import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateInnovationCharacteristicDto extends AuditableDto {
  name: string;

  definition: string;

  source_id: string;
}
