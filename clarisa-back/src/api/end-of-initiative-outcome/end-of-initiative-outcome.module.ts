import { Module } from '@nestjs/common';
import { EndOfInitiativeOutcomeService } from './end-of-initiative-outcome.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EndOfInitiativeOutcome } from './entities/end-of-initiative-outcome.entity';
import { ApiOST } from '../../shared/integration/ost/api.ost';
import { HttpModule } from '@nestjs/axios';
import { IntegrationModule } from '../../shared/integration/integration.module';
import { EndOfInitiativeOutcomeController } from './end-of-initiative-outcome.controller';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([EndOfInitiativeOutcome]),
    IntegrationModule,
  ],
  controllers: [EndOfInitiativeOutcomeController],
  providers: [EndOfInitiativeOutcomeService, ApiOST],
})
export class EndOfInitiativeOutcomeModule {}
