import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { UpdateProjectedBenefitDto } from './dto/update-projected-benefit.dto';
import { ProjectedBenefit } from './entities/projected-benefit.entity';

@Injectable()
export class ProjectedBenefitService {
  constructor(
    @InjectRepository(ProjectedBenefit)
    private projectedBenefitsRepository: Repository<ProjectedBenefit>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ProjectedBenefit[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.projectedBenefitsRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.projectedBenefitsRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<ProjectedBenefit> {
    return await this.projectedBenefitsRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateProjectedBenefitDto: UpdateProjectedBenefitDto[]) {
    return await this.projectedBenefitsRepository.save(
      updateProjectedBenefitDto,
    );
  }
}
