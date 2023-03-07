import { Module } from '@nestjs/common';
import { InvestmentTypeService } from './investment-type.service';
import { InvestmentTypeController } from './investment-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentType } from './entities/investment-type.entity';
import { InvestmentTypeRepository } from './repositories/investment-type.repository';

@Module({
  controllers: [InvestmentTypeController],
  providers: [InvestmentTypeService, InvestmentTypeRepository],
})
export class InvestmentTypeModule {}
