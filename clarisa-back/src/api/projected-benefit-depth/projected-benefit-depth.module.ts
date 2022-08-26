import { Module } from '@nestjs/common';
import { ProjectedBenefitDepthService } from './projected-benefit-depth.service';
import { ProjectedBenefitDepthController } from './projected-benefit-depth.controller';
import { ProjectedBenefitDepth } from './entities/projected-benefit-depth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectedBenefitDepth])],
  controllers: [ProjectedBenefitDepthController],
  providers: [ProjectedBenefitDepthService]
})
export class ProjectedBenefitDepthModule {}
