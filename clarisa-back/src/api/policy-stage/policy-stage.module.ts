import { Module } from '@nestjs/common';
import { PolicyStageService } from './policy-stage.service';
import { PolicyStageController } from './policy-stage.controller';
import { PolicyStage } from './entities/policy-stage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PolicyStage])],
  controllers: [PolicyStageController],
  providers: [PolicyStageService],
})
export class PolicyStageModule {}
