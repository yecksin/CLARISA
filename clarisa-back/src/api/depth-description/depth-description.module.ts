import { Module } from '@nestjs/common';
import { DepthDescriptionService } from './depth-description.service';
import { DepthDescriptionController } from './depth-description.controller';
import { DepthDescriptionRepository } from './repositories/depth-description.repository';

@Module({
  controllers: [DepthDescriptionController],
  providers: [DepthDescriptionService, DepthDescriptionRepository],
})
export class DepthDescriptionModule {}
