import { BasicDto } from '../../../shared/entities/dtos/basic-dto';

export class ScienceGroupDto extends BasicDto {
  financialCode: string;
  parent: BasicDto;
}
