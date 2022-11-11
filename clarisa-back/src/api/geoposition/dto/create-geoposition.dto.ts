import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateGeopositionDto extends AuditableDto {
  latitude: number;

  longitude: number;
}
