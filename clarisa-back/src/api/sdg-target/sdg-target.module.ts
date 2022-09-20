import { Module } from '@nestjs/common';
import { SdgTargetService } from './sdg-target.service';
import { SdgTargetController } from './sdg-target.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SdgTarget } from './entities/sdg-target.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SdgTarget])],
  controllers: [SdgTargetController],
  providers: [SdgTargetService],
})
export class SdgTargetModule {}
