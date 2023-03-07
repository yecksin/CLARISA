import { Module } from '@nestjs/common';
import { UnitService } from './unit.service';
import { UnitController } from './unit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unit } from './entities/unit.entity';
import { UnitRepository } from './repositories/unit.repository';
import { UnitType } from './entities/unit-type.entity';
import { UnitTypeRepository } from './repositories/unit-type.repository';

@Module({
  controllers: [UnitController],
  providers: [UnitService, UnitRepository, UnitTypeRepository],
})
export class UnitModule {}
