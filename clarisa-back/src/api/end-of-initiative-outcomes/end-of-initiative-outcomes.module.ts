import { Module } from '@nestjs/common';
import { EndOfInitiativeOutcomesService } from './end-of-initiative-outcomes.service';
import { EndOfInitiativeOutcomesController } from './end-of-initiative-outcomes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EndOfInitiativeOutcome } from './entities/end-of-initiative-outcome.entity';
import { EndOfInitiativeOutcomeRepository } from './repositories/end-of-initiative-outcome.repository';
import { ApiOST } from '../../shared/integration/ost/api.ost';
import { HttpModule } from '@nestjs/axios';
import { IntegrationModule } from 'src/shared/integration/integration.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([EndOfInitiativeOutcome]),
    IntegrationModule,
  ],
  controllers: [EndOfInitiativeOutcomesController],
  providers: [
    EndOfInitiativeOutcomesService,
    EndOfInitiativeOutcomeRepository,
    ApiOST,
  ],
})
export class EndOfInitiativeOutcomesModule {}
