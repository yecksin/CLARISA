import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateProjectedBenefitDepthDto } from './dto/update-projected-benefit-depth.dto';
import { ProjectedBenefitDepth } from './entities/projected-benefit-depth.entity';
import { ProjectedBenefitDepthRepository } from './repositories/projected-benefit-depth.repository';

@Injectable()
export class ProjectedBenefitDepthService {
  constructor(
    private projectedBenefitDepthRepository: ProjectedBenefitDepthRepository,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ProjectedBenefitDepth[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.projectedBenefitDepthRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.projectedBenefitDepthRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<ProjectedBenefitDepth> {
    return await this.projectedBenefitDepthRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(
    updateProjectedBenefitDepthDto: UpdateProjectedBenefitDepthDto[],
  ) {
    return await this.projectedBenefitDepthRepository.save(
      updateProjectedBenefitDepthDto,
    );
  }
}
