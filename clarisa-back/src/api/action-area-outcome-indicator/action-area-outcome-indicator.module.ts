import { Module } from '@nestjs/common';
import { ActionAreaOutcomeIndicatorService } from './action-area-outcome-indicator.service';
import { ActionAreaOutcomeIndicatorController } from './action-area-outcome-indicator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionAreaOutcomeIndicator } from './entities/action-area-outcome-indicator.entity';
import { ActionAreaOutcomeIndicatorRepository } from './repositories/action-area-outcome-indicator-repository';

@Module({
  imports: [TypeOrmModule.forFeature([ActionAreaOutcomeIndicator])],
  controllers: [ActionAreaOutcomeIndicatorController],
  providers: [
    ActionAreaOutcomeIndicatorService,
    ActionAreaOutcomeIndicatorRepository,
  ],
})
export class ActionAreaOutcomeIndicatorModule {}
