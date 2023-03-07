import { Module } from '@nestjs/common';
import { ImpactAreaIndicatorService } from './impact-area-indicator.service';
import { ImpactAreaIndicatorController } from './impact-area-indicator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImpactAreaIndicator } from './entities/impact-area-indicator.entity';
import { ImpactAreaIndicatorRepository } from './repositories/impact-area-indicator.repository';

@Module({
  controllers: [ImpactAreaIndicatorController],
  providers: [ImpactAreaIndicatorService, ImpactAreaIndicatorRepository],
})
export class ImpactAreaIndicatorModule {}
