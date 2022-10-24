import { Module } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { InstitutionController } from './institution.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institution } from './entities/institution.entity';
import { InstitutionType } from '../institution-type/entities/institution-type.entity';
import { InstitutionRepository } from './repositories/institution.repository';
import { InstitutionLocation } from './entities/institution-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Institution, InstitutionLocation])],
  controllers: [InstitutionController],
  providers: [InstitutionService, InstitutionRepository],
})
export class InstitutionModule {}
