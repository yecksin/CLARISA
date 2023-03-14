import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateTechnologyDevelopmentStageDto } from './dto/update-technology-development-stage.dto';
import { TechnologyDevelopmentStage } from './entities/technology-development-stage.entity';
import { TechnologyDevelopmentStageRepository } from './repositories/technology-development-stage.repository';

@Injectable()
export class TechnologyDevelopmentStageService {
  constructor(
    private technologyDevelopmentStagesRepository: TechnologyDevelopmentStageRepository,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<TechnologyDevelopmentStage[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.technologyDevelopmentStagesRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.technologyDevelopmentStagesRepository.find({
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

  async findOne(id: number): Promise<TechnologyDevelopmentStage> {
    return await this.technologyDevelopmentStagesRepository.findOneBy({
      id,
      auditableFields: { is_active: true },
    });
  }

  async update(
    updateTechnologyDevelopmentStageDto: UpdateTechnologyDevelopmentStageDto[],
  ) {
    return await this.technologyDevelopmentStagesRepository.save(
      updateTechnologyDevelopmentStageDto,
    );
  }
}
