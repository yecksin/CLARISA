import { PartialType } from '@nestjs/mapped-types';
import { CreateEndOfInitiativeOutcomeDto } from './create-end-of-initiative-outcome.dto';

export class UpdateEndOfInitiativeOutcomeDto extends PartialType(CreateEndOfInitiativeOutcomeDto) {}
