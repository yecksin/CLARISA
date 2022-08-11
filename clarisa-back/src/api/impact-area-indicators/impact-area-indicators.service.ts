import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImpactAreaIndicatorDto } from './dto/create-impact-area-indicator.dto';
import { UpdateImpactAreaIndicatorDto } from './dto/update-impact-area-indicator.dto';
import { Repository } from 'typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { ImpactAreaIndicator } from './entities/impact-area-indicator.entity';

@Injectable()
export class ImpactAreaIndicatorsService {

  constructor(
    @InjectRepository(ImpactAreaIndicator)
    private impactAreaIndicatorsRepository: Repository<ImpactAreaIndicator>,
  ) {}
  
  async findAll(option : FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE) : Promise<ImpactAreaIndicator[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.impactAreaIndicatorsRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.impactAreaIndicatorsRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE
          }
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number) : Promise<ImpactAreaIndicator> {
    return await this.impactAreaIndicatorsRepository.findOneBy({
      id,
      is_active : true
    });
  }

  async update(updateImpactaAreaIndicator: UpdateImpactAreaIndicatorDto[]) {
    return await this.impactAreaIndicatorsRepository.save(updateImpactaAreaIndicator);
  }
}
