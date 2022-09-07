import { PartialType } from '@nestjs/mapped-types';
import { CreateScienceGroupDto } from './create-science-group.dto';

export class UpdateScienceGroupDto extends PartialType(CreateScienceGroupDto) {
  id: number;
}
