import { Module } from '@nestjs/common';
import { ActionAreaService } from './action-area.service';
import { ActionAreaController } from './action-area.controller';
import { ActionArea } from './entities/action-area.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionAreaRepository } from './repositories/action-area.repository';

@Module({
  controllers: [ActionAreaController],
  providers: [ActionAreaService, ActionAreaRepository],
})
export class ActionAreaModule {}
