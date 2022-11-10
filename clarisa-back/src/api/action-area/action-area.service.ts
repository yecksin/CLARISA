import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateActionAreaDto } from './dto/update-action-area.dto';
import { ActionArea } from './entities/action-area.entity';

@Injectable()
export class ActionAreaService {
  constructor(
    @InjectRepository(ActionArea)
    private actionAreasRepository: Repository<ActionArea>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ActionArea[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.actionAreasRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.actionAreasRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<ActionArea> {
    return await this.actionAreasRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(
    updateUserDtoList: UpdateActionAreaDto[],
  ): Promise<ActionArea[]> {
    return await this.actionAreasRepository.save(updateUserDtoList);
  }
}
