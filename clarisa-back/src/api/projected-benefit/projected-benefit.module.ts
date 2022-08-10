import { Module } from '@nestjs/common';
import { ProjectedBenefitService } from './projected-benefit.service';
import { ProjectedBenefitController } from './projected-benefit.controller';
import { ProjectedBenefit } from './entities/projected-benefit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectedBenefit])],
  controllers: [ProjectedBenefitController],
  providers: [ProjectedBenefitService]
})
export class ProjectedBenefitModule {}
