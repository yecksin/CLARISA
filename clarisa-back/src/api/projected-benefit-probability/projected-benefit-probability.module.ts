import { Module } from '@nestjs/common';
import { ProjectedBenefitProbabilityService } from './projected-benefit-probability.service';
import { ProjectedBenefitProbabilityController } from './projected-benefit-probability.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectedBenefitProbability } from './entities/projected-benefit-probability.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectedBenefitProbability])],
  controllers: [ProjectedBenefitProbabilityController],
  providers: [ProjectedBenefitProbabilityService]
})
export class ProjectedBenefitProbabilityModule {}
