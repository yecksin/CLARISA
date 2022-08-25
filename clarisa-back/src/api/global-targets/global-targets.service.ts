import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { CreateGlobalTargetDto } from './dto/create-global-target.dto';
import { UpdateGlobalTargetDto } from './dto/update-global-target.dto';
import { GlobalTarget } from './entities/global-target.entity';

@Injectable()
export class GlobalTargetsService {
  constructor(
    @InjectRepository(GlobalTarget)
    private GlobalTargetsRepository: Repository<GlobalTarget>,
  ) {}

  findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<GlobalTarget[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return this.GlobalTargetsRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return this.GlobalTargetsRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<GlobalTarget> {
    return await this.GlobalTargetsRepository.findOneBy({ id });
  }

  async getUsersPagination(offset?: number, limit: number = 10) {
    const [items, count] = await this.GlobalTargetsRepository.findAndCount({
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
    return await this.GlobalTargetsRepository.save(updateUserDtoList);
  }
}
