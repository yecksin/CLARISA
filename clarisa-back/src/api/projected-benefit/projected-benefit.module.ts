import { Module } from '@nestjs/common';
import { ProjectedBenefitService } from './projected-benefit.service';
import { ProjectedBenefitController } from './projected-benefit.controller';
import { ProjectedBenefitRepository } from './repositories/projected-benefit.repository';

@Module({
  controllers: [ProjectedBenefitController],
  providers: [ProjectedBenefitService, ProjectedBenefitRepository],
})
export class ProjectedBenefitModule {}
