import { Module } from '@nestjs/common';
import { InitiativeService } from './initiative.service';
import { InitiativeController } from './initiative.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Initiative } from './entities/initiative.entity';
import { InitiativeRepository } from './repositories/initiative.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Initiative])],
  controllers: [InitiativeController],
  providers: [InitiativeService, InitiativeRepository],
})
export class InitiativeModule {}
