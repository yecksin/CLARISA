import { Module } from '@nestjs/common';
import { InstitutionDictionaryService } from './institution-dictionary.service';
import { InstitutionDictionaryController } from './institution-dictionary.controller';
import { InstitutionRepository } from '../institution/repositories/institution.repository';
import { InstitutionDictionaryRepository } from './repositories/institution-dictionary.repository';
import { InstitutionLocationRepository } from '../institution/repositories/institution-location.repository';

@Module({
  controllers: [InstitutionDictionaryController],
  providers: [
    InstitutionDictionaryService,
    InstitutionDictionaryRepository,
    InstitutionRepository,
    InstitutionLocationRepository,
  ],
})
export class InstitutionDictionaryModule {}
