import { Module } from '@nestjs/common';
import { EndOfInitiativeOutcomesService } from './end-of-initiative-outcomes.service';
import { EndOfInitiativeOutcomesController } from './end-of-initiative-outcomes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EndOfInitiativeOutcome } from './entities/end-of-initiative-outcome.entity';
import { ApiOST } from '../../shared/integration/ost/api.ost';
import { HttpModule } from '@nestjs/axios';
import { IntegrationModule } from '../../shared/integration/integration.module';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([EndOfInitiativeOutcome]),
    IntegrationModule,
  ],
  controllers: [EndOfInitiativeOutcomesController],
  providers: [EndOfInitiativeOutcomesService, ApiOST],
})
export class EndOfInitiativeOutcomesModule {}
