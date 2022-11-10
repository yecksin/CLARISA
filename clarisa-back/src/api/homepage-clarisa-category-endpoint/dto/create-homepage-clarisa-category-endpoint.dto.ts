import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateHomepageClarisaCategoryEndpointDto extends AuditableDto {
  category_id: number;

  endpoint_id: number;
}
