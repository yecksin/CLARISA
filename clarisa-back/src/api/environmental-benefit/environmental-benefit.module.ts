import { Module } from '@nestjs/common';
import { EnvironmentalBenefitService } from './environmental-benefit.service';
import { EnvironmentalBenefitController } from './environmental-benefit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironmentalBenefit } from './entities/environmental-benefit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EnvironmentalBenefit])],
  controllers: [EnvironmentalBenefitController],
  providers: [EnvironmentalBenefitService],
})
export class EnvironmentalBenefitModule {}
