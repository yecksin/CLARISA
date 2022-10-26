import { Controller, Get } from '@nestjs/common';
import { EndOfInitiativeOutcomesService } from './end-of-initiative-outcomes.service';

@Controller()
export class EndOfInitiativeOutcomesController {
  constructor(
    private readonly endOfInitiativeOutcomesService: EndOfInitiativeOutcomesService,
  ) {}

  @Get()
  findAll() {
    return this.endOfInitiativeOutcomesService.findAll();
  }
}
