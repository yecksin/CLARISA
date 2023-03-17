import { Module } from '@nestjs/common';
import { ScienceGroupService } from './science-group.service';
import { ScienceGroupController } from './science-group.controller';
import { ScienceGroupRepository } from './repositories/science-group.repository';

@Module({
  controllers: [ScienceGroupController],
  providers: [ScienceGroupService, ScienceGroupRepository],
})
export class ScienceGroupModule {}
