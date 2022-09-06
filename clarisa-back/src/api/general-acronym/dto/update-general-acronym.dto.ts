import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneralAcronymDto } from './create-general-acronym.dto';

export class UpdateGeneralAcronymDto extends PartialType(CreateGeneralAcronymDto) {
    id: number;
}
