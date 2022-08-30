import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { CreateCgiarEntityTypeDto } from './dto/create-cgiar-entity-type.dto';
import { UpdateCgiarEntityTypeDto } from './dto/update-cgiar-entity-type.dto';
import { CgiarEntityType } from './entities/cgiar-entity-type.entity';

@Injectable()
export class CgiarEntityTypeService {
  constructor(
    @InjectRepository(CgiarEntityType)
    private cgiarEntityTypeRepository: Repository<CgiarEntityType>,
  ) {}

  async findAll(option : FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE) : Promise<CgiarEntityType[]> {
    var estado = 1
    if (option == FindAllOptions.SHOW_ONLY_INACTIVE) estado = 0
    switch(option){
      case FindAllOptions.SHOW_ALL:
        return await this.cgiarEntityTypeRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.cgiarEntityTypeRepository.find({
          where: {
            is_active : estado
          }
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<CgiarEntityType> {
    return await this.cgiarEntityTypeRepository.findOneBy({
      id,
      is_active : 1
    });
  }

  async update(updateCgiarEntityTypeDtoList: UpdateCgiarEntityTypeDto[]) : Promise<CgiarEntityType[]> {
    return await this.cgiarEntityTypeRepository.save(updateCgiarEntityTypeDtoList);
  }
}
