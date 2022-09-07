import { Module } from '@nestjs/common';
import { DepthDescriptionService } from './depth-description.service';
import { DepthDescriptionController } from './depth-description.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepthDescription } from './entities/depth-description.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DepthDescription])],
  controllers: [DepthDescriptionController],
  providers: [DepthDescriptionService],
})
export class DepthDescriptionModule {}
