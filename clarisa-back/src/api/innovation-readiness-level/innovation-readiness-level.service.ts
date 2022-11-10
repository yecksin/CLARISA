import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { SourceOption } from '../../shared/entities/enums/source-options';
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
    type: string = SourceOption.CGIAR.path,
  ): Promise<InnovationReadinessLevel[]> {
    let whereClause: FindOptionsWhere<InnovationReadinessLevel> = {};
    const incomingType = SourceOption.getfromPath(type);

    switch (type) {
      case SourceOption.ALL.path:
        // do nothing. no extra conditions needed
        break;
      case SourceOption.CGIAR.path:
      case SourceOption.LEGACY.path:
      case SourceOption.INNOVATION_CATALOG.path:
        whereClause = {
          ...whereClause,
          source_id: incomingType.source_id,
        };
        break;
      default:
        throw Error('?!');
    }

    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.innovationReadinessLevelRepository.find({
          where: whereClause,
        });
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        whereClause = {
          ...whereClause,
          is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
        };
        return await this.innovationReadinessLevelRepository.find({
          where: whereClause,
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
