import { Module } from '@nestjs/common';
import { ImpactAreaService } from './impact-area.service';
import { ImpactAreaController } from './impact-area.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImpactArea } from './entities/impact-area.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImpactArea])],
  controllers: [ImpactAreaController],
  providers: [ImpactAreaService],
})
export class ImpactAreaModule {}
