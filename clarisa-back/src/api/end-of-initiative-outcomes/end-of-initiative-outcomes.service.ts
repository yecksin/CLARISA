import { Injectable } from '@nestjs/common';
import { CreateEndOfInitiativeOutcomeDto } from './dto/create-end-of-initiative-outcome.dto';
import { UpdateEndOfInitiativeOutcomeDto } from './dto/update-end-of-initiative-outcome.dto';
import { EndOfInitiativeOutcomeRepository } from './repositories/end-of-initiative-outcome.repository';

@Injectable()
export class EndOfInitiativeOutcomesService {
  constructor(
    private initiativesRepository: EndOfInitiativeOutcomeRepository,
  ) {}

  findAll() {
    return this.initiativesRepository.findAllEndOfInitiativeOutcome();
  }
}
