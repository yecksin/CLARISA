import { PartialType } from '@nestjs/mapped-types';
import { CreateInnovationCharacteristicDto } from './create-innovation-characteristic.dto';

export class UpdateInnovationCharacteristicDto extends PartialType(
  CreateInnovationCharacteristicDto,
) {
  id: number;
}
