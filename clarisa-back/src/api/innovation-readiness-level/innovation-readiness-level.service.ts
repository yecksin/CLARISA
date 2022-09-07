import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { UpdateInnovationReadinessLevelDto } from './dto/update-innovation-readiness-level.dto';
import { InnovationReadinessLevel } from './entities/innovation-readiness-level.entity';

@Injectable()
export class InnovationReadinessLevelService {
  constructor(
    @InjectRepository(InnovationReadinessLevel)
    private innovationReadinessLevelRepository: Repository<InnovationReadinessLevel>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<InnovationReadinessLevel[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.innovationReadinessLevelRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.innovationReadinessLevelRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<InnovationReadinessLevel> {
    return await this.innovationReadinessLevelRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(
    updateInnovationReadinessLevelDtoList: UpdateInnovationReadinessLevelDto[],
  ): Promise<InnovationReadinessLevel[]> {
    return await this.innovationReadinessLevelRepository.save(
      updateInnovationReadinessLevelDtoList,
    );
  }
}
