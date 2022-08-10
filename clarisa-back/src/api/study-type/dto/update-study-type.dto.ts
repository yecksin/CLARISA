import { PartialType } from '@nestjs/mapped-types';
import { CreateStudyTypeDto } from './create-study-type.dto';

export class UpdateStudyTypeDto extends PartialType(CreateStudyTypeDto) {
    id: number;
}
