import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateProjectedBenefitWeightingDto } from './dto/update-projected-benefit-weighting.dto';
import { ProjectedBenefitWeighting } from './entities/projected-benefit-weighting.entity';

@Injectable()
export class ProjectedBenefitWeightingService {
  constructor(
    @InjectRepository(ProjectedBenefitWeighting)
    private ProjectedBenefitWeightingRepository: Repository<ProjectedBenefitWeighting>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ProjectedBenefitWeighting[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.ProjectedBenefitWeightingRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.ProjectedBenefitWeightingRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<ProjectedBenefitWeighting> {
    return await this.ProjectedBenefitWeightingRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(
    updateProjectedBenefitWeightingDto: UpdateProjectedBenefitWeightingDto[],
  ) {
    return await this.ProjectedBenefitWeightingRepository.save(
      updateProjectedBenefitWeightingDto,
    );
  }
}
