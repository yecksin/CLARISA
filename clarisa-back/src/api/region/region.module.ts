import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { RegionRepository } from './repositories/region.repository';
import { RegionMappingRepository } from './repositories/region-mapping.repository';

@Module({
  controllers: [RegionController],
  providers: [RegionService, RegionRepository, RegionMappingRepository],
})
export class RegionModule {}
