import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateHomepageClarisaEndpointDto extends AuditableDto {
  name: string;

  route: string;

  http_method: string;

  description: string;

  request_json: string;

  response_json: string;
}
