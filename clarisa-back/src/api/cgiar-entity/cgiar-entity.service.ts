import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CgiarEntityTypeEnum } from 'src/shared/entities/enums/cgiar-entity-types';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
<<<<<<< HEAD
import { Repository } from 'typeorm';
=======
import { FindOperator, FindOptionsOrder, FindOptionsWhere, In, Repository } from 'typeorm';
import { CreateCgiarEntityDto } from './dto/create-cgiar-entity.dto';
>>>>>>> 8819a532fad200c04331388108185252fa4b1d7a
import { UpdateCgiarEntityDto } from './dto/update-cgiar-entity.dto';
import { CgiarEntity } from './entities/cgiar-entity.entity';

@Injectable()
export class CgiarEntityService {
  private readonly orderClause: FindOptionsOrder<CgiarEntity> = {
    smo_code: {
      direction: 'ASC'
    }
  };

  private readonly commonTypes = [
    CgiarEntityTypeEnum.CRP,
    CgiarEntityTypeEnum.PLATFORM,
    CgiarEntityTypeEnum.CENTER,
    CgiarEntityTypeEnum.INITIATIVES,
    CgiarEntityTypeEnum.OFFICES,
  ];

  private readonly whereClause : FindOptionsWhere<CgiarEntity> = {
    cgiarEntityType: {
      id: In(this.commonTypes)
    }
  };

  constructor(
    @InjectRepository(CgiarEntity)
    private cgiarEntityRepository: Repository<CgiarEntity>,
  ) {}

  async findAll(option : FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE) : Promise<CgiarEntity[]> {
    switch(option){
      case FindAllOptions.SHOW_ALL:
        return await this.cgiarEntityRepository.find({
          where: this.whereClause,
          order: this.orderClause
        });
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.cgiarEntityRepository.find({
          where: {
            ...this.whereClause,
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
          order: this.orderClause
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<CgiarEntity> {
    return await this.cgiarEntityRepository.findOneBy({
      id,
      is_active : true
    });
  }

  async update(updateCgiarEntityDtoList: UpdateCgiarEntityDto[]) : Promise<CgiarEntity[]> {
    return await this.cgiarEntityRepository.save(updateCgiarEntityDtoList);
  }
}
