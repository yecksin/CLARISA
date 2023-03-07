import { Module } from '@nestjs/common';
import { GovernanceTypeService } from './governance-type.service';
import { GovernanceTypeController } from './governance-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GovernanceType } from './entities/governance-type.entity';
import { GovernanceTypeRepository } from './repositories/governance-type.repository';

@Module({
  controllers: [GovernanceTypeController],
  providers: [GovernanceTypeService, GovernanceTypeRepository],
})
export class GovernanceTypeModule {}
