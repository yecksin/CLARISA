import { PartialType } from '@nestjs/mapped-types';
import { CreateImpactAreaDto } from './create-impact-area.dto';

export class UpdateImpactAreaDto extends PartialType(CreateImpactAreaDto) {
    id: number;
}
