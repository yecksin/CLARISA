import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateTechnologyDevelopmentStageDto } from './dto/update-technology-development-stage.dto';
import { TechnologyDevelopmentStage } from './entities/technology-development-stage.entity';

@Injectable()
export class TechnologyDevelopmentStageService {
  constructor(
    @InjectRepository(TechnologyDevelopmentStage)
    private technologyDevelopmentStagesRepository: Repository<TechnologyDevelopmentStage>,
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
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<TechnologyDevelopmentStage> {
    return await this.technologyDevelopmentStagesRepository.findOneBy({
      id,
      is_active: true,
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
