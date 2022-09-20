import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateCountryDto extends AuditableDto {
  name: string;

  iso_alpha_2: string;

  iso_alpha_3: string;

  iso_numeric: number;

  geoposition_id: number;
}
