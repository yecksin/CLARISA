import { Module } from '@nestjs/common';
import { ProjectedBenefitWeightingService } from './projected-benefit-weighting.service';
import { ProjectedBenefitWeightingController } from './projected-benefit-weighting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectedBenefitWeighting } from './entities/projected-benefit-weighting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectedBenefitWeighting])],
  controllers: [ProjectedBenefitWeightingController],
  providers: [ProjectedBenefitWeightingService],
})
export class ProjectedBenefitWeightingModule {}
