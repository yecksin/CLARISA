import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { UpdateInnovationUseLevelDto } from './dto/update-innovation-use-level.dto';
import { InnovationUseLevel } from './entities/innovation-use-level.entity';

@Injectable()
export class InnovationUseLevelService {
  constructor(
    @InjectRepository(InnovationUseLevel)
    private innovationUseLevelRepository: Repository<InnovationUseLevel>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<InnovationUseLevel[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.innovationUseLevelRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.innovationUseLevelRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<InnovationUseLevel> {
    return await this.innovationUseLevelRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(
    updateInnovationUseLevelDtoList: UpdateInnovationUseLevelDto[],
  ): Promise<InnovationUseLevel[]> {
    return await this.innovationUseLevelRepository.save(
      updateInnovationUseLevelDtoList,
    );
  }
}
