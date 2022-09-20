import { Module } from '@nestjs/common';
import { OutcomeIndicatorService } from './outcome-indicator.service';
import { OutcomeIndicatorController } from './outcome-indicator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutcomeIndicator } from './entities/outcome-indicator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OutcomeIndicator])],
  controllers: [OutcomeIndicatorController],
  providers: [OutcomeIndicatorService],
})
export class OutcomeIndicatorModule {}
