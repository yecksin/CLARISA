import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateImpactAreaIndicatorDto } from './dto/update-impact-area-indicator.dto';
import { Repository } from 'typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { ImpactAreaIndicator } from './entities/impact-area-indicator.entity';
import { ImpactAreaIndicatorByImpactAreaDto } from './dto/impact-area-indicators-by-impact-are.dto';
import { ImpactAreaIndicatorRepository } from './repositories/impact-area-indicators-repository';

@Injectable()
export class ImpactAreaIndicatorsService {
  constructor(
    private impactAreaIndicatorsRepository: ImpactAreaIndicatorRepository,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ImpactAreaIndicatorByImpactAreaDto[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.impactAreaIndicatorsRepository.impactAreaIndicatorsByImpactArea();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.impactAreaIndicatorsRepository.impactAreaIndicatorsByImpactAreaIsActive(
          option,
        );
      default:
        throw Error('?!');
    }
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
