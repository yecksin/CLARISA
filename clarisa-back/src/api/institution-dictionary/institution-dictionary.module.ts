import { Module } from '@nestjs/common';
import { InstitutionDictionaryService } from './institution-dictionary.service';
import { InstitutionDictionaryController } from './institution-dictionary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionDictionary } from './entities/institution-dictionary.entity';
import { InstitutionRepository } from '../institution/repositories/institution.repository';
import { InstitutionLocation } from '../institution/entities/institution-location.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([InstitutionDictionary, InstitutionLocation]),
  ],
  controllers: [InstitutionDictionaryController],
  providers: [InstitutionDictionaryService, InstitutionRepository],
})
export class InstitutionDictionaryModule {}
