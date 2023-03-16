import { Module } from '@nestjs/common';
import { StudyTypeService } from './study-type.service';
import { StudyTypeController } from './study-type.controller';
import { StudyTypeRepository } from './repositories/study-type.repository';

@Module({
  controllers: [StudyTypeController],
  providers: [StudyTypeService, StudyTypeRepository],
})
export class StudyTypeModule {}
