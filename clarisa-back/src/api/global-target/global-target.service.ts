import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateGlobalTargetDto } from './dto/update-global-target.dto';
import { GlobalTarget } from './entities/global-target.entity';

@Injectable()
export class GlobalTargetService {
  constructor(
    @InjectRepository(GlobalTarget)
    private GlobalTargetRepository: Repository<GlobalTarget>,
  ) {}

  findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<GlobalTarget[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return this.GlobalTargetRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return this.GlobalTargetRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<GlobalTarget> {
    return await this.GlobalTargetRepository.findOneBy({ id });
  }

  async getUsersPagination(offset?: number, limit = 10) {
    const [items, count] = await this.GlobalTargetRepository.findAndCount({
      order: {
        id: 'ASC',
      },
      skip: offset,
      take: limit,
    });

    return {
      items,
      count,
    };
  }

  async update(
    updateUserDtoList: UpdateGlobalTargetDto[],
  ): Promise<GlobalTarget[]> {
    return await this.GlobalTargetRepository.save(updateUserDtoList);
  }
}
