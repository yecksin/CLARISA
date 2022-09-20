import { Module } from '@nestjs/common';
import { GeopositionService } from './geoposition.service';
import { GeopositionController } from './geoposition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Geoposition } from './entities/geoposition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Geoposition])],
  controllers: [GeopositionController],
  providers: [GeopositionService],
})
export class GeopositionModule {}
