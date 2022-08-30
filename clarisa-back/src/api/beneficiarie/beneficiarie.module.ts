import { Module } from '@nestjs/common';
import { BeneficiarieService } from './beneficiarie.service';
import { BeneficiarieController } from './beneficiarie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beneficiarie } from './entities/beneficiarie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Beneficiarie])],
  controllers: [BeneficiarieController],
  providers: [BeneficiarieService]
})
export class BeneficiarieModule {}
