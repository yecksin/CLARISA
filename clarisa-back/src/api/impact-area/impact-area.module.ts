import { Module } from '@nestjs/common';
import { ImpactAreaService } from './impact-area.service';
import { ImpactAreaController } from './impact-area.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImpactArea } from './entities/impact-area.entity';
import { ImpactAreaRepository } from './repositories/impact-area.repository';

@Module({
  controllers: [ImpactAreaController],
  providers: [ImpactAreaService, ImpactAreaRepository],
})
export class ImpactAreaModule {}
