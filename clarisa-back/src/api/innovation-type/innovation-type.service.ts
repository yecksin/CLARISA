import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { InnovationTypeEnum } from 'src/shared/entities/enums/innovation-types';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateInnovationTypeDto } from './dto/create-innovation-type.dto';
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
    type: InnovationTypeEnum = InnovationTypeEnum.CGIAR,
  ): Promise<InnovationType[]> {
    let whereClause: FindOptionsWhere<InnovationType> = {};

    switch (type) {
      case InnovationTypeEnum.ALL:
        // do nothing. no extra conditions needed
        break;
      case InnovationTypeEnum.CGIAR:
        whereClause = {
          ...whereClause,
          is_onecgiar: true,
        };
        break;
      case InnovationTypeEnum.LEGACY:
        whereClause = {
          ...whereClause,
          is_marlo: true,
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
