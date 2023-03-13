import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateImpactAreaDto } from './dto/update-impact-area.dto';
import { ImpactArea } from './entities/impact-area.entity';
import { ImpactAreaRepository } from './repositories/impact-area.repository';

@Injectable()
export class ImpactAreaService {
  constructor(private impactAreasRepository: ImpactAreaRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ImpactArea[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.impactAreasRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.impactAreasRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<ImpactArea> {
    return await this.impactAreasRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateImpactAreaDto: UpdateImpactAreaDto[]) {
    return await this.impactAreasRepository.save(updateImpactAreaDto);
  }
}
