import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { CreateCgiarEntityDto } from './dto/create-cgiar-entity.dto';
import { UpdateCgiarEntityDto } from './dto/update-cgiar-entity.dto';
import { CgiarEntity } from './entities/cgiar-entity.entity';

@Injectable()
export class CgiarEntityService {
  constructor(
    @InjectRepository(CgiarEntity)
    private cgiarEntityRepository: Repository<CgiarEntity>,
  ) {}

  async findAll(option : FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE) : Promise<CgiarEntity[]> {
    var estado = 1
    if (option == FindAllOptions.SHOW_ONLY_INACTIVE) estado = 0
    switch(option){
      case FindAllOptions.SHOW_ALL:
        return await this.cgiarEntityRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.cgiarEntityRepository.find({
          where: {
            is_active : estado
          }
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<CgiarEntity> {
    return await this.cgiarEntityRepository.findOneBy({
      id,
      is_active : 1
    });
  }

  async update(updateCgiarEntityDtoList: UpdateCgiarEntityDto[]) : Promise<CgiarEntity[]> {
    return await this.cgiarEntityRepository.save(updateCgiarEntityDtoList);
  }
}
