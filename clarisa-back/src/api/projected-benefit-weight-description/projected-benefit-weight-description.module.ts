import { Module } from '@nestjs/common';
import { ProjectedBenefitWeightDescriptionService } from './projected-benefit-weight-description.service';
import { ProjectedBenefitWeightDescriptionController } from './projected-benefit-weight-description.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectedBenefitWeightDescription } from './entities/projected-benefit-weight-description.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectedBenefitWeightDescription])],
  controllers: [ProjectedBenefitWeightDescriptionController],
  providers: [ProjectedBenefitWeightDescriptionService],
})
export class ProjectedBenefitWeightDescriptionModule {}
