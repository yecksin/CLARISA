import { PartialType } from '@nestjs/mapped-types';
import { CreateActionAreaOutcomeIndicatorDto } from './create-action-area-outcome-indicator.dto';

export class UpdateActionAreaOutcomeIndicatorDto extends PartialType(CreateActionAreaOutcomeIndicatorDto) {
    id: number;
}
