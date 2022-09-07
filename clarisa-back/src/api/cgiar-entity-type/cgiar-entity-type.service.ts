import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CgiarEntityTypeEnum } from 'src/shared/entities/enums/cgiar-entity-types';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { FindOptionsWhere, In, Repository } from 'typeorm';
import { CreateCgiarEntityTypeDto } from './dto/create-cgiar-entity-type.dto';
import { UpdateCgiarEntityTypeDto } from './dto/update-cgiar-entity-type.dto';
import { CgiarEntityType } from './entities/cgiar-entity-type.entity';

@Injectable()
export class CgiarEntityTypeService {
  constructor(
    @InjectRepository(CgiarEntityType)
    private cgiarEntityTypeRepository: Repository<CgiarEntityType>,
  ) {}

  private readonly defaultTypes = [
    CgiarEntityTypeEnum.CRP,
    CgiarEntityTypeEnum.PLATFORM,
    CgiarEntityTypeEnum.CENTER,
    CgiarEntityTypeEnum.INITIATIVES,
    CgiarEntityTypeEnum.ONE_CGIAR_PLATFORM,
  ];

  private readonly whereClause: FindOptionsWhere<CgiarEntityType> = {
    id: In(this.defaultTypes),
  };

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<CgiarEntityType[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.cgiarEntityTypeRepository.find({
          where: this.whereClause,
        });
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.cgiarEntityTypeRepository.find({
          where: {
            ...this.whereClause,
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<CgiarEntityType> {
    return await this.cgiarEntityTypeRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(
    updateCgiarEntityTypeDtoList: UpdateCgiarEntityTypeDto[],
  ): Promise<CgiarEntityType[]> {
    return await this.cgiarEntityTypeRepository.save(
      updateCgiarEntityTypeDtoList,
    );
  }
}
