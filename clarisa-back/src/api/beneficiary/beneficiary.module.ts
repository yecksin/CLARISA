import { Module } from '@nestjs/common';
import { BeneficiaryService } from './beneficiary.service';
import { BeneficiaryController } from './beneficiary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beneficiary } from './entities/beneficiary.entity';
import { BeneficiaryRepository } from './repositories/beneficiary.repository';

@Module({
  controllers: [BeneficiaryController],
  providers: [BeneficiaryService, BeneficiaryRepository],
})
export class BeneficiaryModule {}
