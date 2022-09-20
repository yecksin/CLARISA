import { PartialType } from '@nestjs/mapped-types';
import { CreateCgiarEntityDto } from './create-cgiar-entity.dto';

export class UpdateCgiarEntityDto extends PartialType(CreateCgiarEntityDto) {
  id: number;
}
