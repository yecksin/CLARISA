import { PartialType } from '@nestjs/mapped-types';
import { CreateDepthDescriptionDto } from './create-depth-description.dto';

export class UpdateDepthDescriptionDto extends PartialType(CreateDepthDescriptionDto) {
    id: number;
}
