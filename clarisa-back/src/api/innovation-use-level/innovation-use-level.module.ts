import { Module } from '@nestjs/common';
import { InnovationUseLevelService } from './innovation-use-level.service';
import { InnovationUseLevelController } from './innovation-use-level.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InnovationUseLevel } from './entities/innovation-use-level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InnovationUseLevel])],
  controllers: [InnovationUseLevelController],
  providers: [InnovationUseLevelService],
})
export class InnovationUseLevelModule {}
