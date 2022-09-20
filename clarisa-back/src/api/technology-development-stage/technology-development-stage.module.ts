import { Module } from '@nestjs/common';
import { TechnologyDevelopmentStageService } from './technology-development-stage.service';
import { TechnologyDevelopmentStageController } from './technology-development-stage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnologyDevelopmentStage } from './entities/technology-development-stage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TechnologyDevelopmentStage])],
  controllers: [TechnologyDevelopmentStageController],
  providers: [TechnologyDevelopmentStageService],
})
export class TechnologyDevelopmentStageModule {}
