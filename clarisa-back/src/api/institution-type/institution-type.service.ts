import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { SourceOption } from 'src/shared/entities/enums/source-options';
import { FindOptionsWhere, Repository } from 'typeorm';
import { UpdateInstitutionTypeDto } from './dto/update-institution-type.dto';
import { InstitutionType } from './entities/institution-type.entity';

@Injectable()
export class InstitutionTypeService {
  constructor(
    @InjectRepository(InstitutionType)
    private institutionTypesRepository: Repository<InstitutionType>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
    type: string = SourceOption.CGIAR.path,
  ): Promise<InstitutionType[]> {
    let whereClause: FindOptionsWhere<InstitutionType> = {};
    const incomingType = SourceOption.getfromPath(type);

    switch (type) {
      case SourceOption.ALL.path:
        // do nothing. no extra conditions needed
        break;
      case SourceOption.CGIAR.path:
      case SourceOption.LEGACY.path:
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
        return await this.institutionTypesRepository.find({
          where: whereClause,
        });
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        whereClause = {
          ...whereClause,
          is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
        };
        return await this.institutionTypesRepository.find({
          where: whereClause,
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<InstitutionType> {
    return await this.institutionTypesRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateInstitutionTypeDto: UpdateInstitutionTypeDto[]) {
    return await this.institutionTypesRepository.save(updateInstitutionTypeDto);
  }
}
