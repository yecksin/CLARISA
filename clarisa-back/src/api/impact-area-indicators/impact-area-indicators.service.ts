import { Injectable } from '@nestjs/common';
import { UpdateImpactAreaIndicatorDto } from './dto/update-impact-area-indicator.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { ImpactAreaIndicator } from './entities/impact-area-indicator.entity';
import { ImpactAreaIndicatorDto } from './dto/impact-area-indicator.dto';
import { ImpactAreaIndicatorRepository } from './repositories/impact-area-indicators-repository';

@Injectable()
export class ImpactAreaIndicatorsService {
  constructor(
    private impactAreaIndicatorsRepository: ImpactAreaIndicatorRepository,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ImpactAreaIndicatorDto[]> {
    if (!Object.values<string>(FindAllOptions).includes(option)) {
      throw Error('?!');
    }

    return this.impactAreaIndicatorsRepository.findAllImpactAreaIndicators(
      option,
    );
  }

  async findOne(id: number): Promise<ImpactAreaIndicator> {
    return await this.impactAreaIndicatorsRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateImpactaAreaIndicator: UpdateImpactAreaIndicatorDto[]) {
    return await this.impactAreaIndicatorsRepository.save(
      updateImpactaAreaIndicator,
    );
  }
}
