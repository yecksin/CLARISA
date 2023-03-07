import { Module } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { InstitutionController } from './institution.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institution } from './entities/institution.entity';
import { InstitutionRepository } from './repositories/institution.repository';
import { InstitutionLocation } from './entities/institution-location.entity';
import { InstitutionLocationRepository } from './repositories/institution-location.repository';

@Module({
  controllers: [InstitutionController],
  providers: [
    InstitutionService,
    InstitutionRepository,
    InstitutionLocationRepository,
  ],
})
export class InstitutionModule {}
