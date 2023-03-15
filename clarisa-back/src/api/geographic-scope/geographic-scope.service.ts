import { Injectable } from '@nestjs/common';
import { FindOptionsWhere } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { SourceOption } from '../../shared/entities/enums/source-options';
import { UpdateGeographicScopeDto } from './dto/update-geographic-scope.dto';
import { GeographicScope } from './entities/geographic-scope.entity';
import { GeographicScopeRepository } from './repositories/geographic-scope.repository';

@Injectable()
export class GeographicScopeService {
  constructor(private geographicScopesRepository: GeographicScopeRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
    type: string = SourceOption.LEGACY.path,
  ): Promise<GeographicScope[]> {
    let whereClause: FindOptionsWhere<GeographicScope> = {};
    const incomingType = SourceOption.getfromPath(type);

    switch (type) {
      case SourceOption.ALL.path:
        // do nothing. no extra conditions needed
        break;
      case SourceOption.LEGACY.path:
        whereClause = {
          ...whereClause,
          source_id: incomingType.source_id,
        };
        break;
      case SourceOption.CGIAR.path:
        whereClause = {
          ...whereClause,
          source_id: SourceOption.LEGACY.source_id,
          is_one_cgiar: true,
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
          auditableFields: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
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
      auditableFields: { is_active: true },
    });
  }

  async update(updateGeographicScopeDto: UpdateGeographicScopeDto[]) {
    return await this.geographicScopesRepository.save(updateGeographicScopeDto);
  }
}
