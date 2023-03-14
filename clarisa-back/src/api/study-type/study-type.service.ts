import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateStudyTypeDto } from './dto/update-study-type.dto';
import { StudyType } from './entities/study-type.entity';
import { StudyTypeRepository } from './repositories/study-type.repository';

@Injectable()
export class StudyTypeService {
  constructor(private studyTypesRepository: StudyTypeRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<StudyType[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.studyTypesRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.studyTypesRepository.find({
          where: {
            auditableFields: {
              is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
            },
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<StudyType> {
    return await this.studyTypesRepository.findOneBy({
      id,
      auditableFields: { is_active: true },
    });
  }

  async update(updateStudyTypeDto: UpdateStudyTypeDto[]) {
    return await this.studyTypesRepository.save(updateStudyTypeDto);
  }
}
