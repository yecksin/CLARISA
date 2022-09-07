import { ScienceGroupSimpleDto } from './science-group-simple.dto';

export class ScienceGroupDto {
  code: number;
  financialCode: string;
  description: string;
  parent: ScienceGroupSimpleDto;
}
