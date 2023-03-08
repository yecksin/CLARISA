import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryRepository } from '../../api/country/repositories/country.repository';
import { InitiativeStage } from '../../api/initiative/entities/initiative-status.entity';
import { Stage } from '../../api/initiative/entities/status.entity';
import { InitiativeRepository } from '../../api/initiative/repositories/initiative.repository';
import { RegionRepository } from '../../api/region/repositories/region.repository';
import { WorkpackageCountry } from '../../api/workpackage/entities/workpackage-country.entity';
import { WorkpackageRegion } from '../../api/workpackage/entities/workpackage-region.entity';
import { WorkpackageRepository } from '../../api/workpackage/repositories/workpackage.repository';
import { IntegrationController } from './integration.controller';
import { ApiOST } from './ost/api.ost';
import { CronOST } from './ost/cron.ost';
import { QaService } from './qa/qa.service';

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
    QaService,
    HttpModule,
  ],
  controllers: [IntegrationController],
  exports: [QaService],
})
export class IntegrationModule {}
