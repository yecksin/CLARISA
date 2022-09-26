import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EndOfInitiativeOutcomesService } from './end-of-initiative-outcomes.service';
import { CreateEndOfInitiativeOutcomeDto } from './dto/create-end-of-initiative-outcome.dto';
import { UpdateEndOfInitiativeOutcomeDto } from './dto/update-end-of-initiative-outcome.dto';

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
