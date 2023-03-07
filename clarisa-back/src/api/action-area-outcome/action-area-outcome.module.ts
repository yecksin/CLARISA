import { Module } from '@nestjs/common';
import { ActionAreaOutcomeService } from './action-area-outcome.service';
import { ActionAreaOutcomeController } from './action-area-outcome.controller';
import { ActionAreaOutcome } from './entities/action-area-outcome.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionAreaOutcomeIndicatorRepository } from '../action-area-outcome-indicator/repositories/action-area-outcome-indicator-repository';
import { ActionAreaOutcomeRepository } from './repositories/action-area-outcome.repository';

@Module({
  controllers: [ActionAreaOutcomeController],
  providers: [
    ActionAreaOutcomeService,
    ActionAreaOutcomeRepository,
    ActionAreaOutcomeIndicatorRepository,
  ],
})
export class ActionAreaOutcomeModule {}
