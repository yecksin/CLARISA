import { Module } from '@nestjs/common';
import { InnovationReadinessLevelService } from './innovation-readiness-level.service';
import { InnovationReadinessLevelController } from './innovation-readiness-level.controller';
import { InnovationReadinessLevelRepository } from './repositories/innovation-readiness-level.repository';

@Module({
  controllers: [InnovationReadinessLevelController],
  providers: [
    InnovationReadinessLevelService,
    InnovationReadinessLevelRepository,
  ],
})
export class InnovationReadinessLevelModule {}
