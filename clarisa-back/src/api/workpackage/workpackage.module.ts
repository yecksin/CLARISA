import { Module } from '@nestjs/common';
import { WorkpackageService } from './workpackage.service';
import { WorkpackageController } from './workpackage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workpackage } from './entities/workpackage.entity';
import { WorkpackageRepository } from './repositories/workpackage.repository';

@Module({
  controllers: [WorkpackageController],
  providers: [WorkpackageService, WorkpackageRepository],
})
export class WorkpackageModule {}
