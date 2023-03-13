import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateOutcomeIndicatorDto } from './dto/update-outcome-indicator.dto';
import { OutcomeIndicator } from './entities/outcome-indicator.entity';
import { OutcomeIndicatorRepository } from './repositories/outcome-indicator.repository';

@Injectable()
export class OutcomeIndicatorService {
  constructor(
    private outcomeIndicatorsRepository: OutcomeIndicatorRepository,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<OutcomeIndicator[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.outcomeIndicatorsRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.outcomeIndicatorsRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<OutcomeIndicator> {
    return await this.outcomeIndicatorsRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateOutcomeIndicatorDto: UpdateOutcomeIndicatorDto[]) {
    return await this.outcomeIndicatorsRepository.save(
      updateOutcomeIndicatorDto,
    );
  }
}
