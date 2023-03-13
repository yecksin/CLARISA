import { Module } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { InstitutionController } from './institution.controller';
import { InstitutionRepository } from './repositories/institution.repository';
import { InstitutionLocationRepository } from './repositories/institution-location.repository';

@Module({
  controllers: [InstitutionController],
  providers: [
    InstitutionService,
    InstitutionRepository,
    InstitutionLocationRepository,
  ],
  exports: [InstitutionLocationRepository],
})
export class InstitutionModule {}
