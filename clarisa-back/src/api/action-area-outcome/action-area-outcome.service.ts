import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { ActionAreaOutcomeIndicatorRepository } from '../action-area-outcome-indicator/repositories/action-area-outcome-indicator-repository';
import { ActionAreaOutcomeDto } from './dto/action-area-outcome.dto';
import { UpdateActionAreaOutcomeDto } from './dto/update-action-area-outcome.dto';
import { ActionAreaOutcome } from './entities/action-area-outcome.entity';
import { ActionAreaOutcomeRepository } from './repositories/action-area-outcome.repository';

@Injectable()
export class ActionAreaOutcomeService {
  constructor(
    private actionAreaOutcomesRepository: ActionAreaOutcomeRepository,
    private actionAreaOutcomeIndicatorRepositort: ActionAreaOutcomeIndicatorRepository,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ActionAreaOutcomeDto[]> {
    if (!Object.values<string>(FindAllOptions).includes(option)) {
      throw Error('?!');
    }

    return this.actionAreaOutcomeIndicatorRepositort.findAllActionAreaOutcomes(
      option,
    );
  }

  async findOne(id: number): Promise<ActionAreaOutcome> {
    return await this.actionAreaOutcomesRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateActionAreaOutcomeDto: UpdateActionAreaOutcomeDto[]) {
    return await this.actionAreaOutcomesRepository.save(
      updateActionAreaOutcomeDto,
    );
  }
}
