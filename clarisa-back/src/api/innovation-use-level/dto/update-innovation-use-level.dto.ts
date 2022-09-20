import { PartialType } from '@nestjs/mapped-types';
import { CreateInnovationUseLevelDto } from './create-innovation-use-level.dto';

export class UpdateInnovationUseLevelDto extends PartialType(
  CreateInnovationUseLevelDto,
) {
  id: number;
}
