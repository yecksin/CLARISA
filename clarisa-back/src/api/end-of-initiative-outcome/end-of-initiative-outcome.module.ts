import { Module } from '@nestjs/common';
import { EndOfInitiativeOutcomeService } from './end-of-initiative-outcome.service';
import { ApiOST } from '../../shared/integration/ost/api.ost';
import { HttpModule } from '@nestjs/axios';
import { IntegrationModule } from '../../shared/integration/integration.module';
import { EndOfInitiativeOutcomeController } from './end-of-initiative-outcome.controller';
import { EndOfInitiativeOutcomeRepository } from './repositories/end-of-initiative-outcomes.repository';

@Module({
  imports: [HttpModule, IntegrationModule],
  controllers: [EndOfInitiativeOutcomeController],
  providers: [
    EndOfInitiativeOutcomeService,
    ApiOST,
    EndOfInitiativeOutcomeRepository,
  ],
})
export class EndOfInitiativeOutcomeModule {}
