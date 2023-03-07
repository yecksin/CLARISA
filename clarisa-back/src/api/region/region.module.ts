import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from './entities/region.entity';
import { RegionRepository } from './repositories/region.repository';

@Module({
  controllers: [RegionController],
  providers: [RegionService, RegionRepository],
})
export class RegionModule {}
