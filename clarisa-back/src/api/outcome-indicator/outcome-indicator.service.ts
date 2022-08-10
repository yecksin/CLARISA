import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { CreateOutcomeIndicatorDto } from './dto/create-outcome-indicator.dto';
import { UpdateOutcomeIndicatorDto } from './dto/update-outcome-indicator.dto';
import { OutcomeIndicator } from './entities/outcome-indicator.entity';

@Injectable()
export class OutcomeIndicatorService {
  constructor(
    @InjectRepository(OutcomeIndicator)
    private outcomeIndicatorsRepository: Repository<OutcomeIndicator>,
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
    return await this.outcomeIndicatorsRepository.save(updateOutcomeIndicatorDto);
  }
}
