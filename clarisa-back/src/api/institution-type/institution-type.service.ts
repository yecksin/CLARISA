import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { SourceOption } from '../../shared/entities/enums/source-options';
import { InstitutionTypeFromParentDto } from './dto/institution-type-from-parent.dto';
import { InstitutionTypeDto } from './dto/institution-type.dto';
import { UpdateInstitutionTypeDto } from './dto/update-institution-type.dto';
import { InstitutionType } from './entities/institution-type.entity';
import { InstitutionTypeRepository } from './repositories/institution-type.repository';

@Injectable()
export class InstitutionTypeService {
  constructor(private institutionTypesRepository: InstitutionTypeRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
    type: string = SourceOption.CGIAR.path,
  ): Promise<InstitutionTypeDto[]> {
    if (!Object.values<string>(FindAllOptions).includes(option)) {
      throw Error('?!');
    }

    if (!SourceOption.getfromPath(type)) {
      throw Error('?!');
    }

    return this.institutionTypesRepository.findAllTypesFromChildrenToParent(
      option,
      type,
    );
  }

  async findAllFromParentToChildren(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
    type: string = SourceOption.CGIAR.path,
  ): Promise<InstitutionTypeFromParentDto[]> {
    if (!Object.values<string>(FindAllOptions).includes(option)) {
      throw Error('?!');
    }

    if (!SourceOption.getfromPath(type)) {
      throw Error('?!');
    }

    return this.institutionTypesRepository.findAllTypesFromParentToChildren(
      option,
      type,
    );
  }

  async findOne(id: number): Promise<InstitutionType> {
    return await this.institutionTypesRepository.findOneBy({
      id,
      auditableFields: { is_active: true },
    });
  }

  async update(updateInstitutionTypeDto: UpdateInstitutionTypeDto[]) {
    return await this.institutionTypesRepository.save(updateInstitutionTypeDto);
  }
}
