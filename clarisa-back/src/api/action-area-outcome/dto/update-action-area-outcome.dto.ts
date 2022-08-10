import { PartialType } from '@nestjs/mapped-types';
import { CreateActionAreaOutcomeDto } from './create-action-area-outcome.dto';

export class UpdateActionAreaOutcomeDto extends PartialType(CreateActionAreaOutcomeDto) {
    id: number;
}
