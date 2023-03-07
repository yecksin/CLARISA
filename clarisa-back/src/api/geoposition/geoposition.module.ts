import { Module } from '@nestjs/common';
import { GeopositionService } from './geoposition.service';
import { GeopositionController } from './geoposition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Geoposition } from './entities/geoposition.entity';
import { GeopositionRepository } from './repositories/geoposition.repository';

@Module({
  controllers: [GeopositionController],
  providers: [GeopositionService, GeopositionRepository],
})
export class GeopositionModule {}
