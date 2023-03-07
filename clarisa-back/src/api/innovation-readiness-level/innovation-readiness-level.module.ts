import { Module } from '@nestjs/common';
import { InnovationReadinessLevelService } from './innovation-readiness-level.service';
import { InnovationReadinessLevelController } from './innovation-readiness-level.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InnovationReadinessLevel } from './entities/innovation-readiness-level.entity';
import { InnovationReadinessLevelRepository } from './repositories/innovation-readiness-level.repository';

@Module({
  controllers: [InnovationReadinessLevelController],
  providers: [
    InnovationReadinessLevelService,
    InnovationReadinessLevelRepository,
  ],
})
export class InnovationReadinessLevelModule {}
