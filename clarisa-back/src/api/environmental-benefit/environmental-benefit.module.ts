import { Module } from '@nestjs/common';
import { EnvironmentalBenefitService } from './environmental-benefit.service';
import { EnvironmentalBenefitController } from './environmental-benefit.controller';
import { EnvironmentalBenefitRepository } from './repositories/environmental-benefit.repository';

@Module({
  controllers: [EnvironmentalBenefitController],
  providers: [EnvironmentalBenefitService, EnvironmentalBenefitRepository],
})
export class EnvironmentalBenefitModule {}
