import { Module } from '@nestjs/common';
import { GlobalTargetService } from './global-target.service';
import { GlobalTargetController } from './global-target.controller';
import { GlobalTargetRepository } from './repositories/global-target.repository';

@Module({
  controllers: [GlobalTargetController],
  providers: [GlobalTargetService, GlobalTargetRepository],
})
export class GlobalTargetModule {}
