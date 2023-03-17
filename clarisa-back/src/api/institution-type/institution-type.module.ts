import { Module } from '@nestjs/common';
import { InstitutionTypeService } from './institution-type.service';
import { InstitutionTypeController } from './institution-type.controller';
import { InstitutionTypeRepository } from './repositories/institution-type.repository';
import { InstitutionTypeMapper } from './mappers/institution-type.mapper';

@Module({
  controllers: [InstitutionTypeController],
  providers: [
    InstitutionTypeService,
    InstitutionTypeRepository,
    InstitutionTypeMapper,
  ],
  exports: [InstitutionTypeRepository, InstitutionTypeMapper],
})
export class InstitutionTypeModule {}
