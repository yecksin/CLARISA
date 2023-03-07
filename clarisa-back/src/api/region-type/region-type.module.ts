import { Module } from '@nestjs/common';
import { RegionTypeService } from './region-type.service';
import { RegionTypeController } from './region-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionType } from './entities/region-type.entity';
import { RegionTypeRepository } from './repositories/region-type.repository';

@Module({
  controllers: [RegionTypeController],
  providers: [RegionTypeService, RegionTypeRepository],
})
export class RegionTypeModule {}
