import { Module } from '@nestjs/common';
import { ProjectedBenefitProbabilityService } from './projected-benefit-probability.service';
import { ProjectedBenefitProbabilityController } from './projected-benefit-probability.controller';
import { ProjectedBenefitProbabilityRepository } from './repositories/projected-benefit-probability.repository';

@Module({
  controllers: [ProjectedBenefitProbabilityController],
  providers: [
    ProjectedBenefitProbabilityService,
    ProjectedBenefitProbabilityRepository,
  ],
})
export class ProjectedBenefitProbabilityModule {}
