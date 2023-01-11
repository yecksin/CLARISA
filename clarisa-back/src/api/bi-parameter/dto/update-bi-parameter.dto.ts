import { PartialType } from '@nestjs/mapped-types';
import { CreateBiParameterDto } from './create-bi-parameter.dto';

export class UpdateBiParameterDto extends PartialType(CreateBiParameterDto) {
  id: number;
}
