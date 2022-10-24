import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { SourceOption } from 'src/shared/entities/enums/source-options';
import { FindOptionsWhere, Repository } from 'typeorm';
import { UpdateInnovationTypeDto } from './dto/update-innovation-type.dto';
import { InnovationType } from './entities/innovation-type.entity';

@Injectable()
export class InnovationTypeService {
  constructor(
    @InjectRepository(InnovationType)
    private innovationTypesRepository: Repository<InnovationType>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
    type: string = SourceOption.CGIAR.path,
  ): Promise<InnovationType[]> {
    let whereClause: FindOptionsWhere<InnovationType> = {};
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
        return await this.innovationTypesRepository.find({
          where: whereClause,
        });
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        whereClause = {
          ...whereClause,
          is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
        };
        return await this.innovationTypesRepository.find({
          where: whereClause,
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<InnovationType> {
    return await this.innovationTypesRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateInnovationTypeDto: UpdateInnovationTypeDto[]) {
    return await this.innovationTypesRepository.save(updateInnovationTypeDto);
  }
}
