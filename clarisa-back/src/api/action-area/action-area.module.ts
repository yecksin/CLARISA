import { Module } from '@nestjs/common';
import { ActionAreaService } from './action-area.service';
import { ActionAreaController } from './action-area.controller';
import { ActionArea } from './entities/action-area.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ActionArea])],
  controllers: [ActionAreaController],
  providers: [ActionAreaService],
})
export class ActionAreaModule {}
