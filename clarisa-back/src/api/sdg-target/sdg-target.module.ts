import { Module } from '@nestjs/common';
import { SdgTargetService } from './sdg-target.service';
import { SdgTargetController } from './sdg-target.controller';
import { SdgTargetRepository } from './repositories/sdg-target.repository';

@Module({
  controllers: [SdgTargetController],
  providers: [SdgTargetService, SdgTargetRepository],
})
export class SdgTargetModule {}
