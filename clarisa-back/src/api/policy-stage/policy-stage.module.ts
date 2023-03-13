import { Module } from '@nestjs/common';
import { PolicyStageService } from './policy-stage.service';
import { PolicyStageController } from './policy-stage.controller';
import { PolicyStageRepository } from './repositories/policy-stage.repository';

@Module({
  controllers: [PolicyStageController],
  providers: [PolicyStageService, PolicyStageRepository],
})
export class PolicyStageModule {}
