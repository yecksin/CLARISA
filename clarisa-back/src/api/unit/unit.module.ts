import { Module } from '@nestjs/common';
import { UnitService } from './unit.service';
import { UnitController } from './unit.controller';
import { UnitRepository } from './repositories/unit.repository';
import { UnitTypeRepository } from './repositories/unit-type.repository';

@Module({
  controllers: [UnitController],
  providers: [UnitService, UnitRepository, UnitTypeRepository],
})
export class UnitModule {}
