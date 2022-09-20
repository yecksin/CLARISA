import { Module } from '@nestjs/common';
import { ImpactAreaIndicatorsService } from './impact-area-indicators.service';
import { ImpactAreaIndicatorsController } from './impact-area-indicators.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImpactAreaIndicator } from './entities/impact-area-indicator.entity';
import { ImpactAreaIndicatorRepository } from './repositories/impact-area-indicators-repository';

@Module({
  imports: [TypeOrmModule.forFeature([ImpactAreaIndicator])],
  controllers: [ImpactAreaIndicatorsController],
  providers: [ImpactAreaIndicatorsService, ImpactAreaIndicatorRepository],
})
export class ImpactAreaIndicatorsModule {}
