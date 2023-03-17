import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { UpdateEnvironmentalBenefitDto } from './dto/update-environmental-benefit.dto';
import { EnvironmentalBenefit } from './entities/environmental-benefit.entity';
import { EnvironmentalBenefitRepository } from './repositories/environmental-benefit.repository';

@Injectable()
export class EnvironmentalBenefitService {
  constructor(
    private environmentalBenefitsRepository: EnvironmentalBenefitRepository,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<EnvironmentalBenefit[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.environmentalBenefitsRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.environmentalBenefitsRepository.find({
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

  async findOne(id: number): Promise<EnvironmentalBenefit> {
    return await this.environmentalBenefitsRepository.findOneBy({
      id,
      auditableFields: { is_active: true },
    });
  }

  async update(updateEnvironmentalBenefitDto: UpdateEnvironmentalBenefitDto[]) {
    return await this.environmentalBenefitsRepository.save(
      updateEnvironmentalBenefitDto,
    );
  }
}
