import { Module } from '@nestjs/common';
import { WorkpackageService } from './workpackage.service';
import { WorkpackageController } from './workpackage.controller';
import { WorkpackageRepository } from './repositories/workpackage.repository';
import { WorkpackageRegionRepository } from './repositories/workpackage-country.repository copy';
import { WorkpackageCountryRepository } from './repositories/workpackage-country.repository';

@Module({
  controllers: [WorkpackageController],
  providers: [
    WorkpackageService,
    WorkpackageRepository,
    WorkpackageRegionRepository,
    WorkpackageCountryRepository,
  ],
  exports: [WorkpackageCountryRepository, WorkpackageCountryRepository],
})
export class WorkpackageModule {}
