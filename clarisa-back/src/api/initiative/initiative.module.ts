import { Module } from '@nestjs/common';
import { InitiativeService } from './initiative.service';
import { InitiativeController } from './initiative.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Initiative } from './entities/initiative.entity';
import { InitiativeRepository } from './repositories/initiative.repository';
import { InitiativeStage } from './entities/initiative-status.entity';
import { Stage } from './entities/status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Initiative, InitiativeStage, Stage])],
  controllers: [InitiativeController],
  providers: [InitiativeService, InitiativeRepository],
})
export class InitiativeModule {}
