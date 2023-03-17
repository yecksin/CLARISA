import { Module } from '@nestjs/common';
import { SdgService } from './sdg.service';
import { SdgController } from './sdg.controller';
import { SdgRepository } from './repositories/sdg.repository';

@Module({
  controllers: [SdgController],
  providers: [SdgService, SdgRepository],
})
export class SdgModule {}
