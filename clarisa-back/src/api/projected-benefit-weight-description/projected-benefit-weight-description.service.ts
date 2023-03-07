import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateProjectedBenefitWeightDescriptionDto } from './dto/update-projected-benefit-weight-description.dto';
import { ProjectedBenefitWeightDescription } from './entities/projected-benefit-weight-description.entity';
import { ProjectedBenefitWeightDescriptionRepository } from './repositories/projected-benefit-weight-description.repository';

@Injectable()
export class ProjectedBenefitWeightDescriptionService {
  constructor(
    private projectedBenefitWeightDescriptionRepository: ProjectedBenefitWeightDescriptionRepository,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ProjectedBenefitWeightDescription[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.projectedBenefitWeightDescriptionRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.projectedBenefitWeightDescriptionRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<ProjectedBenefitWeightDescription> {
    return await this.projectedBenefitWeightDescriptionRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(
    updateProjectedBenefitWeightDescriptionDto: UpdateProjectedBenefitWeightDescriptionDto[],
  ) {
    return await this.projectedBenefitWeightDescriptionRepository.save(
      updateProjectedBenefitWeightDescriptionDto,
    );
  }
}
