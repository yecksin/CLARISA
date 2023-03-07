import { Module } from '@nestjs/common';
import { DepthDescriptionService } from './depth-description.service';
import { DepthDescriptionController } from './depth-description.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepthDescription } from './entities/depth-description.entity';
import { DepthDescriptionRepository } from './repositories/depth-description.repository';

@Module({
  controllers: [DepthDescriptionController],
  providers: [DepthDescriptionService, DepthDescriptionRepository],
})
export class DepthDescriptionModule {}
