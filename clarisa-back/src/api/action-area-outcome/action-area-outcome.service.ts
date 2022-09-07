import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { UpdateActionAreaOutcomeDto } from './dto/update-action-area-outcome.dto';
import { ActionAreaOutcome } from './entities/action-area-outcome.entity';

@Injectable()
export class ActionAreaOutcomeService {
  constructor(
    @InjectRepository(ActionAreaOutcome)
    private actionAreaOutcomesRepository: Repository<ActionAreaOutcome>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ActionAreaOutcome[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.actionAreaOutcomesRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.actionAreaOutcomesRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
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
