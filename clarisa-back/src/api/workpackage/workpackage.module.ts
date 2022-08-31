import { Module } from '@nestjs/common';
import { WorkpackageService } from './workpackage.service';
import { WorkpackageController } from './workpackage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workpackage } from './entities/workpackage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Workpackage])],
  controllers: [WorkpackageController],
  providers: [WorkpackageService]
})
export class WorkpackageModule {}
