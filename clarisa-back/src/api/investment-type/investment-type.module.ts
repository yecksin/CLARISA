import { Module } from '@nestjs/common';
import { InvestmentTypeService } from './investment-type.service';
import { InvestmentTypeController } from './investment-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentType } from './entities/investment-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InvestmentType])],
  controllers: [InvestmentTypeController],
  providers: [InvestmentTypeService],
})
export class InvestmentTypeModule {}
