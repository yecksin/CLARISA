import { PartialType } from '@nestjs/mapped-types';
import { CreateImpactAreaIndicatorDto } from './create-impact-area-indicator.dto';

export class UpdateImpactAreaIndicatorDto extends PartialType(CreateImpactAreaIndicatorDto) {
    id: number;
}
