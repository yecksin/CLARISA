import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateRegionDto extends AuditableDto {
  iso_numeric: number;

  name: string;

  acronym: string;

  region_type_id: number;

  parent_id: number;
}
