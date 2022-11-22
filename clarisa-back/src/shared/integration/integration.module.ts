import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryRepository } from 'src/api/country/repositories/country.repository';
import { InitiativeStage } from 'src/api/initiative/entities/initiative-status.entity';
import { Stage } from 'src/api/initiative/entities/status.entity';
import { InitiativeRepository } from 'src/api/initiative/repositories/initiative.repository';
import { RegionRepository } from 'src/api/region/repositories/region.repository';
import { WorkpackageCountry } from 'src/api/workpackage/entities/workpackage-country.entity';
import { WorkpackageRegion } from 'src/api/workpackage/entities/workpackage-region.entity';
import { WorkpackageRepository } from 'src/api/workpackage/repositories/workpackage.repository';
import { IntegrationController } from './integration.controller';
import { ApiOST } from './ost/api.ost';
import { CronOST } from './ost/cron.ost';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([
      InitiativeStage,
      Stage,
      WorkpackageCountry,
      WorkpackageRegion,
    ]),
  ],
  providers: [
    CronOST,
    ApiOST,
    WorkpackageRepository,
    InitiativeRepository,
    CountryRepository,
    RegionRepository,
  ],
  controllers: [IntegrationController],
})
export class IntegrationModule {}
