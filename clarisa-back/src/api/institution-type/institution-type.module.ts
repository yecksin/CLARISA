import { Module } from '@nestjs/common';
import { InstitutionTypeService } from './institution-type.service';
import { InstitutionTypeController } from './institution-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionType } from './entities/institution-type.entity';
import { InstitutionTypeRepository } from './repositories/institution-type.repository';

@Module({
  controllers: [InstitutionTypeController],
  providers: [InstitutionTypeService, InstitutionTypeRepository],
  exports: [InstitutionTypeRepository],
})
export class InstitutionTypeModule {}
