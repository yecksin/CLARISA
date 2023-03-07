import { Module } from '@nestjs/common';
import { InnovationUseLevelService } from './innovation-use-level.service';
import { InnovationUseLevelController } from './innovation-use-level.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InnovationUseLevel } from './entities/innovation-use-level.entity';
import { InnovationUseLevelRepository } from './repositories/innovation-use-level.repository';

@Module({
  controllers: [InnovationUseLevelController],
  providers: [InnovationUseLevelService, InnovationUseLevelRepository],
})
export class InnovationUseLevelModule {}
