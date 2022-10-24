import { PartialType } from '@nestjs/mapped-types';
import { CreateMisDto } from './create-mis.dto';

export class UpdateMisDto extends PartialType(CreateMisDto) {
  id: number;
}
