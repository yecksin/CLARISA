import { PartialType } from '@nestjs/mapped-types';
import { CreateHomepageClarisaCategoryEndpointDto } from './create-homepage-clarisa-category-endpoint.dto';

export class UpdateHomepageClarisaCategoryEndpointDto extends PartialType(
  CreateHomepageClarisaCategoryEndpointDto,
) {
  id: number;
}
