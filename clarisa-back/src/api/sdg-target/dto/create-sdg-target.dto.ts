import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateSdgTargetDto extends AuditableDto {
  id: number;

  sdg_target_code: string;

  sdg_target: string;

  sdg_id: number;
}
