import { Controller, Get } from '@nestjs/common';
import { EndOfInitiativeOutcomeService } from './end-of-initiative-outcome.service';

@Controller()
export class EndOfInitiativeOutcomeController {
  constructor(
    private readonly endOfInitiativeOutcomeService: EndOfInitiativeOutcomeService,
  ) {}

  @Get()
  findAll() {
    return this.endOfInitiativeOutcomeService.findAll();
  }
}
