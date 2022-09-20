import { Module } from '@nestjs/common';
import { RegionTypeService } from './region-type.service';
import { RegionTypeController } from './region-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionType } from './entities/region-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegionType])],
  controllers: [RegionTypeController],
  providers: [RegionTypeService],
})
export class RegionTypeModule {}
