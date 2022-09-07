import { PartialType } from '@nestjs/mapped-types';
import { CreateInnovationTypeDto } from './create-innovation-type.dto';

export class UpdateInnovationTypeDto extends PartialType(
  CreateInnovationTypeDto,
) {
  id: number;
}
