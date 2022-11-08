import { Module } from '@nestjs/common';
import { PartnerRequestService } from './partner-request.service';
import { PartnerRequestController } from './partner-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnerRequest } from './entities/partner-request.entity';
import { PartnerRequestRepository } from './repositories/partner-request.repository';
import { InstitutionType } from '../institution-type/entities/institution-type.entity';
import { CountryRepository } from '../country/repositories/country.repository';
import { Mis } from '../mis/entities/mis.entity';
import { User } from '../user/entities/user.entity';
import { InstitutionRepository } from '../institution/repositories/institution.repository';
import { InstitutionLocation } from '../institution/entities/institution-location.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PartnerRequest,
      InstitutionType,
      InstitutionLocation,
      Mis,
      User,
    ]),
  ],
  controllers: [PartnerRequestController],
  providers: [
    PartnerRequestService,
    PartnerRequestRepository,
    CountryRepository,
    InstitutionRepository,
  ],
})
export class PartnerRequestModule {}