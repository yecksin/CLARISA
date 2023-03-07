import { Module } from '@nestjs/common';
import { ProjectedBenefitDepthService } from './projected-benefit-depth.service';
import { ProjectedBenefitDepthController } from './projected-benefit-depth.controller';
import { ProjectedBenefitDepth } from './entities/projected-benefit-depth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectedBenefitDepthRepository } from './repositories/projected-benefit-depth.repository';

@Module({
  controllers: [ProjectedBenefitDepthController],
  providers: [ProjectedBenefitDepthService, ProjectedBenefitDepthRepository],
})
export class ProjectedBenefitDepthModule {}
