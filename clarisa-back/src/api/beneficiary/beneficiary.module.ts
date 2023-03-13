import { Module } from '@nestjs/common';
import { BeneficiaryService } from './beneficiary.service';
import { BeneficiaryController } from './beneficiary.controller';
import { BeneficiaryRepository } from './repositories/beneficiary.repository';

@Module({
  controllers: [BeneficiaryController],
  providers: [BeneficiaryService, BeneficiaryRepository],
})
export class BeneficiaryModule {}
