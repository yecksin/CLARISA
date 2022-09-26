import { PartialType } from '@nestjs/mapped-types';
import { CreateHomepageClarisaCategoryDto } from './create-homepage-clarisa-category.dto';

export class UpdateHomepageClarisaCategoryDto extends PartialType(
  CreateHomepageClarisaCategoryDto,
) {
  id: number;
}
