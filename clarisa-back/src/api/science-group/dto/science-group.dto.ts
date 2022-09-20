import { BasicDto } from 'src/shared/entities/dtos/basic-dto';

export class ScienceGroupDto extends BasicDto {
  financialCode: string;
  parent: BasicDto;
}
