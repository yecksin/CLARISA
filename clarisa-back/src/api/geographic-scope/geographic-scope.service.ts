import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { IndicatorTypeEnum } from 'src/shared/entities/enums/indicator-types';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateGeographicScopeDto } from './dto/create-geographic-scope.dto';
import { UpdateGeographicScopeDto } from './dto/update-geographic-scope.dto';
import { GeographicScope } from './entities/geographic-scope.entity';

@Injectable()
export class GeographicScopeService {
  constructor(
    @InjectRepository(GeographicScope)
    private geographicScopesRepository: Repository<GeographicScope>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
    type: IndicatorTypeEnum = IndicatorTypeEnum.CGIAR,
  ): Promise<GeographicScope[]> {
    let whereClause: FindOptionsWhere<GeographicScope> = {};

    switch (type) {
      case IndicatorTypeEnum.ALL:
        // do nothing. no extra conditions needed
        break;
      case IndicatorTypeEnum.CGIAR:
        whereClause = {
          ...whereClause,
          is_onecgiar: true,
        };
        break;
      case IndicatorTypeEnum.LEGACY:
        whereClause = {
          ...whereClause,
          is_legacy: true,
        };
        break;
      default:
        throw Error('?!');
    }

    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.geographicScopesRepository.find({
          where: whereClause,
        });
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        whereClause = {
          ...whereClause,
          is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
        };
        return await this.geographicScopesRepository.find({
          where: whereClause,
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<GeographicScope> {
    return await this.geographicScopesRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateGeographicScopeDto: UpdateGeographicScopeDto[]) {
    return await this.geographicScopesRepository.save(updateGeographicScopeDto);
  }
}
