import { InitiativeOutcomeDto } from './initiative-outcomes.dto';

export class CreateEndOfInitiativeOutcomeDto {
  initiativeId: number;

  initiativeOfficialCode: string;

  initiativeName: string;

  initiativeStageName: string;

  initiativeOutcomes: InitiativeOutcomeDto;
}
