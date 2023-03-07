import { Module } from '@nestjs/common';
import { ProjectedBenefitWeightingService } from './projected-benefit-weighting.service';
import { ProjectedBenefitWeightingController } from './projected-benefit-weighting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectedBenefitWeighting } from './entities/projected-benefit-weighting.entity';
import { ProjectedBenefitWeightingRepository } from './repositories/projected-benefit-weighting.repository';

@Module({
  controllers: [ProjectedBenefitWeightingController],
  providers: [
    ProjectedBenefitWeightingService,
    ProjectedBenefitWeightingRepository,
  ],
})
export class ProjectedBenefitWeightingModule {}
