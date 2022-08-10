import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { CreateProjectedBenefitProbabilityDto } from './dto/create-projected-benefit-probability.dto';
import { UpdateProjectedBenefitProbabilityDto } from './dto/update-projected-benefit-probability.dto';
import { ProjectedBenefitProbability } from './entities/projected-benefit-probability.entity';

@Injectable()
export class ProjectedBenefitProbabilityService {
  constructor(
    @InjectRepository(ProjectedBenefitProbability)
    private projectedBenefitProbabilitysRepository: Repository<ProjectedBenefitProbability>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ProjectedBenefitProbability[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.projectedBenefitProbabilitysRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.projectedBenefitProbabilitysRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<ProjectedBenefitProbability> {
    return await this.projectedBenefitProbabilitysRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateProjectedBenefitProbabilityDto: UpdateProjectedBenefitProbabilityDto[]) {
    return await this.projectedBenefitProbabilitysRepository.save(updateProjectedBenefitProbabilityDto);
  }
}
