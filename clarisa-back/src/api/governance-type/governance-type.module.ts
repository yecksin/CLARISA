import { Module } from '@nestjs/common';
import { GovernanceTypeService } from './governance-type.service';
import { GovernanceTypeController } from './governance-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GovernanceType } from './entities/governance-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GovernanceType])],
  controllers: [GovernanceTypeController],
  providers: [GovernanceTypeService]
})
export class GovernanceTypeModule {}
