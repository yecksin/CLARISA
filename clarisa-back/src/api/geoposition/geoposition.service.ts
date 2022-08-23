import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { CreateGeopositionDto } from './dto/create-geoposition.dto';
import { UpdateGeopositionDto } from './dto/update-geoposition.dto';
import { Geoposition } from './entities/geoposition.entity';

@Injectable()
export class GeopositionService {
  constructor(
    @InjectRepository(Geoposition)
    private geopositionsRepository: Repository<Geoposition>,
  ) {}

  async findAll(option : FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE) : Promise<Geoposition[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.geopositionsRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.geopositionsRepository.find({
          where: {
            is_active : option === FindAllOptions.SHOW_ONLY_ACTIVE
          }
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<Geoposition> {
    return await this.geopositionsRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateGeopositionDto: UpdateGeopositionDto[]) {
    return await this.geopositionsRepository.save(updateGeopositionDto);
  }
}
