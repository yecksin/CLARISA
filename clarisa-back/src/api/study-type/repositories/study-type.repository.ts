import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { StudyType } from '../entities/study-type.entity';

@Injectable()
export class StudyTypeRepository extends Repository<StudyType> {
  constructor(private dataSource: DataSource) {
    super(StudyType, dataSource.createEntityManager());
  }
}
