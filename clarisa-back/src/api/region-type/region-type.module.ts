import { Module } from '@nestjs/common';
import { RegionTypeService } from './region-type.service';
import { RegionTypeController } from './region-type.controller';
import { RegionTypeRepository } from './repositories/region-type.repository';

@Module({
  controllers: [RegionTypeController],
  providers: [RegionTypeService, RegionTypeRepository],
})
export class RegionTypeModule {}
