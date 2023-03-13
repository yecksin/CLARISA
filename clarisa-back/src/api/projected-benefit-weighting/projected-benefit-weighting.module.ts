import { Module } from '@nestjs/common';
import { ProjectedBenefitWeightingService } from './projected-benefit-weighting.service';
import { ProjectedBenefitWeightingController } from './projected-benefit-weighting.controller';
import { ProjectedBenefitWeightingRepository } from './repositories/projected-benefit-weighting.repository';

@Module({
  controllers: [ProjectedBenefitWeightingController],
  providers: [
    ProjectedBenefitWeightingService,
    ProjectedBenefitWeightingRepository,
  ],
})
export class ProjectedBenefitWeightingModule {}
