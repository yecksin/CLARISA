import { PartialType } from '@nestjs/mapped-types';
import { CreateHomepageClarisaEndpointDto } from './create-homepage-clarisa-endpoint.dto';

export class UpdateHomepageClarisaEndpointDto extends PartialType(
  CreateHomepageClarisaEndpointDto,
) {
  id: number;
}
