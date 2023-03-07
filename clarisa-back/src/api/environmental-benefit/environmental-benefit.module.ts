import { Module } from '@nestjs/common';
import { EnvironmentalBenefitService } from './environmental-benefit.service';
import { EnvironmentalBenefitController } from './environmental-benefit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironmentalBenefit } from './entities/environmental-benefit.entity';
import { EnvironmentalBenefitRepository } from './repositories/environmental-benefit.repository';

@Module({
  controllers: [EnvironmentalBenefitController],
  providers: [EnvironmentalBenefitService, EnvironmentalBenefitRepository],
})
export class EnvironmentalBenefitModule {}
