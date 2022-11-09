import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateTechnologyDevelopmentStageDto extends AuditableDto {
  name: string;

  official_code: string;
}
