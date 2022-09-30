import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InitiativeStage } from 'src/api/initiative/entities/initiative-status.entity';
import { Stage } from 'src/api/initiative/entities/status.entity';
import { InitiativeRepository } from 'src/api/initiative/repositories/initiative.repository';
import { Workpackage } from 'src/api/workpackage/entities/workpackage.entity';
import { WorkpackageRepository } from 'src/api/workpackage/repositories/workpackage.repository';
import { ApiOST } from './ost/api.ost';
import { CronOST } from './ost/cron.ost';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([InitiativeStage, Stage])],
  providers: [CronOST, ApiOST, WorkpackageRepository, InitiativeRepository],
})
export class IntegrationModule {}
