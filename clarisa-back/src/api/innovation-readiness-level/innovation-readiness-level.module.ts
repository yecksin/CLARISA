import { Module } from '@nestjs/common';
import { InnovationReadinessLevelService } from './innovation-readiness-level.service';
import { InnovationReadinessLevelController } from './innovation-readiness-level.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InnovationReadinessLevel } from './entities/innovation-readiness-level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InnovationReadinessLevel])],
  controllers: [InnovationReadinessLevelController],
  providers: [InnovationReadinessLevelService]
})
export class InnovationReadinessLevelModule {}
