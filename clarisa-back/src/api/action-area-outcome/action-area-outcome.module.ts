import { Module } from '@nestjs/common';
import { ActionAreaOutcomeService } from './action-area-outcome.service';
import { ActionAreaOutcomeController } from './action-area-outcome.controller';
import { ActionAreaOutcome } from './entities/action-area-outcome.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ActionAreaOutcome])],
  controllers: [ActionAreaOutcomeController],
  providers: [ActionAreaOutcomeService],
})
export class ActionAreaOutcomeModule {}
