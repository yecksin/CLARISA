import { Module } from '@nestjs/common';
import { GlobalTargetsService } from './global_targets.service';
import { GlobalTargetsController } from './global_targets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalTarget } from './entities/global_target.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GlobalTarget])],
  controllers: [GlobalTargetsController],
  providers: [GlobalTargetsService]
})
export class GlobalTargetsModule {}
