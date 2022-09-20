import { Module } from '@nestjs/common';
import { StudyTypeService } from './study-type.service';
import { StudyTypeController } from './study-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyType } from './entities/study-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudyType])],
  controllers: [StudyTypeController],
  providers: [StudyTypeService],
})
export class StudyTypeModule {}
