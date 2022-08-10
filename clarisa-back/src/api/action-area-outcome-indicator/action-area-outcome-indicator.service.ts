import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { CreateActionAreaOutcomeIndicatorDto } from './dto/create-action-area-outcome-indicator.dto';
import { UpdateActionAreaOutcomeIndicatorDto } from './dto/update-action-area-outcome-indicator.dto';
import { ActionAreaOutcomeIndicator } from './entities/action-area-outcome-indicator.entity';

@Injectable()
export class ActionAreaOutcomeIndicatorService {
  constructor(
    @InjectRepository(ActionAreaOutcomeIndicator)
    private actionAreaOutcomeIndicatorsRepository: Repository<ActionAreaOutcomeIndicator>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ActionAreaOutcomeIndicator[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.actionAreaOutcomeIndicatorsRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.actionAreaOutcomeIndicatorsRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<ActionAreaOutcomeIndicator> {
    return await this.actionAreaOutcomeIndicatorsRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateActionAreaOutcomeIndicatorDto: UpdateActionAreaOutcomeIndicatorDto[]) {
    return await this.actionAreaOutcomeIndicatorsRepository.save(updateActionAreaOutcomeIndicatorDto);
  }
}
