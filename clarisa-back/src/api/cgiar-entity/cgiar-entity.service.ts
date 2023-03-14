import { Injectable } from '@nestjs/common';
import { FindOptionsOrder, FindOptionsWhere, In } from 'typeorm';
import { CgiarEntityTypeEnum } from '../../shared/entities/enums/cgiar-entity-types';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateCgiarEntityDto } from './dto/update-cgiar-entity.dto';
import { CgiarEntity } from './entities/cgiar-entity.entity';
import { CgiarEntityRepository } from './repositories/cgiar-entity.repository';

@Injectable()
export class CgiarEntityService {
  private readonly orderClause: FindOptionsOrder<CgiarEntity> = {
    smo_code: {
      direction: 'ASC',
    },
  };

  private readonly commonTypes = [
    CgiarEntityTypeEnum.CRP,
    CgiarEntityTypeEnum.PLATFORM,
    CgiarEntityTypeEnum.CENTER,
    CgiarEntityTypeEnum.INITIATIVES,
    CgiarEntityTypeEnum.OFFICES,
  ];

  private readonly whereClause: FindOptionsWhere<CgiarEntity> = {
    cgiar_entity_type_object: {
      id: In(this.commonTypes),
    },
  };

  constructor(private cgiarEntityRepository: CgiarEntityRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<CgiarEntity[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.cgiarEntityRepository.find({
          where: this.whereClause,
          order: this.orderClause,
        });
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.cgiarEntityRepository.find({
          where: {
            ...this.whereClause,
            auditableFields: {
              is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
            },
          },
          order: this.orderClause,
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<CgiarEntity> {
    return await this.cgiarEntityRepository.findOneBy({
      id,
      auditableFields: { is_active: true },
    });
  }

  async update(
    updateCgiarEntityDtoList: UpdateCgiarEntityDto[],
  ): Promise<CgiarEntity[]> {
    return await this.cgiarEntityRepository.save(updateCgiarEntityDtoList);
  }
}
