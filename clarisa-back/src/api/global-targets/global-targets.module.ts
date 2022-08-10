import { Module } from '@nestjs/common';
import { GlobalTargetsService } from './global-targets.service';
import { GlobalTargetsController } from './global-targets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalTarget } from './entities/global-target.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GlobalTarget])],
  controllers: [GlobalTargetsController],
  providers: [GlobalTargetsService]
})
export class GlobalTargetsModule {}
