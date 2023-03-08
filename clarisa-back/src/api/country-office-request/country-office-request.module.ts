import { Module } from '@nestjs/common';
import { CountryOfficeRequestService } from './country-office-request.service';
import { CountryOfficeRequestController } from './country-office-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryOfficeRequest } from './entities/country-office-request.entity';
import { Mis } from '../mis/entities/mis.entity';
import { User } from '../user/entities/user.entity';
import { InstitutionModule } from '../institution/institution.module';
import { InstitutionRepository } from '../institution/repositories/institution.repository';
import { CountryRepository } from '../country/repositories/country.repository';
import { CountryOfficeRequestRepository } from './repositories/country-office-request.repository';
import { InstitutionLocation } from '../institution/entities/institution-location.entity';
import { MisRepository } from '../mis/repositories/mis.repository';
import { UserRepository } from '../user/repositories/user.repository';
import { InstitutionLocationRepository } from '../institution/repositories/institution-location.repository';

@Module({
  controllers: [CountryOfficeRequestController],
  providers: [
    CountryOfficeRequestService,
    InstitutionRepository,
    CountryRepository,
    CountryOfficeRequestRepository,
    MisRepository,
    UserRepository,
    InstitutionLocationRepository,
  ],
  exports: [
    CountryOfficeRequestService,
    InstitutionRepository,
    CountryRepository,
    CountryOfficeRequestRepository,
    MisRepository,
    UserRepository,
    InstitutionLocationRepository,
  ],
})
export class CountryOfficeRequestModule {}
