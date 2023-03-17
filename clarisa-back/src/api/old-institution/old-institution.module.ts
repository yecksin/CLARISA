import { Module } from '@nestjs/common';
import { OldInstitutionService } from './old-institution.service';
import { OldInstitutionController } from './old-institution.controller';
import { OldInstitutionRepository } from './repositories/old-institution.repository';
import { InstitutionLocationRepository } from '../institution/repositories/institution-location.repository';
import { InstitutionTypeRepository } from '../institution-type/repositories/institution-type.repository';

@Module({
  controllers: [OldInstitutionController],
  providers: [
    OldInstitutionService,
    OldInstitutionRepository,
    InstitutionLocationRepository,
    InstitutionTypeRepository,
  ],
})
export class OldInstitutionModule {}
