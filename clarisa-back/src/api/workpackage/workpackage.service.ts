import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateWorkpackageDto } from './dto/update-workpackage.dto';
import { WorkpackageDto } from './dto/workpackage.dto';
import { Workpackage } from './entities/workpackage.entity';
import { WorkpackageRepository } from './repositories/workpackage.repository';

@Injectable()
export class WorkpackageService {
  constructor(private workpackageRepository: WorkpackageRepository) {}

  async findAll(
    showWorkpackages: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
    showInitiatives: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<WorkpackageDto[]> {
    if (!Object.values<string>(FindAllOptions).includes(showWorkpackages)) {
      throw Error('?!');
    }

    if (!Object.values<string>(FindAllOptions).includes(showInitiatives)) {
      throw Error('?!');
    }

    return this.workpackageRepository.findAllWorkpackages(
      showWorkpackages,
      showInitiatives,
    );
  }

  async findOne(id: number): Promise<Workpackage> {
    return await this.workpackageRepository.findOneBy({
      id,
      auditableFields: {
        is_active: true,
      },
    });
  }

  async update(updateInitiativeDto: UpdateWorkpackageDto[]) {
    return await this.workpackageRepository.save(updateInitiativeDto);
  }
}
