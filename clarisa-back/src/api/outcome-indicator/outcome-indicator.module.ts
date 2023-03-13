import { Module } from '@nestjs/common';
import { OutcomeIndicatorService } from './outcome-indicator.service';
import { OutcomeIndicatorController } from './outcome-indicator.controller';
import { OutcomeIndicatorRepository } from './repositories/outcome-indicator.repository';

@Module({
  controllers: [OutcomeIndicatorController],
  providers: [OutcomeIndicatorService, OutcomeIndicatorRepository],
})
export class OutcomeIndicatorModule {}
