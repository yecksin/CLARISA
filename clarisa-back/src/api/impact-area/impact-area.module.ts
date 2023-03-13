import { Module } from '@nestjs/common';
import { ImpactAreaService } from './impact-area.service';
import { ImpactAreaController } from './impact-area.controller';
import { ImpactAreaRepository } from './repositories/impact-area.repository';

@Module({
  controllers: [ImpactAreaController],
  providers: [ImpactAreaService, ImpactAreaRepository],
})
export class ImpactAreaModule {}
