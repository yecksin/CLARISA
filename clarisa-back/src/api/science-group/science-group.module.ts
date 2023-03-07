import { Module } from '@nestjs/common';
import { ScienceGroupService } from './science-group.service';
import { ScienceGroupController } from './science-group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScienceGroup } from './entities/science-group.entity';
import { ScienceGroupRepository } from './repositories/science-group.repository';

@Module({
  controllers: [ScienceGroupController],
  providers: [ScienceGroupService, ScienceGroupRepository],
})
export class ScienceGroupModule {}
