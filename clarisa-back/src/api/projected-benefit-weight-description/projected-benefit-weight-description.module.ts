import { Module } from '@nestjs/common';
import { ProjectedBenefitWeightDescriptionService } from './projected-benefit-weight-description.service';
import { ProjectedBenefitWeightDescriptionController } from './projected-benefit-weight-description.controller';
import { ProjectedBenefitWeightDescriptionRepository } from './repositories/projected-benefit-weight-description.repository';

@Module({
  controllers: [ProjectedBenefitWeightDescriptionController],
  providers: [
    ProjectedBenefitWeightDescriptionService,
    ProjectedBenefitWeightDescriptionRepository,
  ],
})
export class ProjectedBenefitWeightDescriptionModule {}
