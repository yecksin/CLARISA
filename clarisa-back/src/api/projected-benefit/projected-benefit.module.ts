import { Module } from '@nestjs/common';
import { ProjectedBenefitService } from './projected-benefit.service';
import { ProjectedBenefitController } from './projected-benefit.controller';
import { ProjectedBenefit } from './entities/projected-benefit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectedBenefitRepository } from './repositories/projected-benefit.repository';

@Module({
  controllers: [ProjectedBenefitController],
  providers: [ProjectedBenefitService, ProjectedBenefitRepository],
})
export class ProjectedBenefitModule {}
