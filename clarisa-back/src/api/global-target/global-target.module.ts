import { Module } from '@nestjs/common';
import { GlobalTargetService } from './global-target.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalTarget } from './entities/global-target.entity';
import { GlobalTargetController } from './global-target.controller';

@Module({
  imports: [TypeOrmModule.forFeature([GlobalTarget])],
  controllers: [GlobalTargetController],
  providers: [GlobalTargetService],
})
export class GlobalTargetModule {}
