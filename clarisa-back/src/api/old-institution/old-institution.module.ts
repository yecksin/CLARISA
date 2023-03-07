import { Module } from '@nestjs/common';
import { OldInstitutionService } from './old-institution.service';
import { OldInstitutionController } from './old-institution.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OldInstitution } from './entities/old-institution.entity';
import { InstitutionLocation } from '../institution/entities/institution-location.entity';
import { OldInstitutionRepository } from './repositories/old-institution.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OldInstitution, InstitutionLocation])],
  controllers: [OldInstitutionController],
  providers: [OldInstitutionService, OldInstitutionRepository],
})
export class OldInstitutionModule {}
