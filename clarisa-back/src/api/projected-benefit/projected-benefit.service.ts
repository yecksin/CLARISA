import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { ProjectedBenefitDto } from './dto/projected-benefit.dto';
import { UpdateProjectedBenefitDto } from './dto/update-projected-benefit.dto';
import { ProjectedBenefit } from './entities/projected-benefit.entity';
import { ProjectedBenefitRepository } from './repositories/projected-benefit.repository';

@Injectable()
export class ProjectedBenefitService {
  constructor(
    private projectedBenefitsRepository: ProjectedBenefitRepository,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ProjectedBenefitDto[]> {
    if (!Object.values<string>(FindAllOptions).includes(option)) {
      throw Error('?!');
    }

    return this.projectedBenefitsRepository.findAllProjectedBenefits(option);
  }

  async findOne(id: number): Promise<ProjectedBenefit> {
    return await this.projectedBenefitsRepository.findOneBy({
      id,
      auditableFields: { is_active: true },
    });
  }

  async update(updateProjectedBenefitDto: UpdateProjectedBenefitDto[]) {
    return await this.projectedBenefitsRepository.save(
      updateProjectedBenefitDto,
    );
  }
}
