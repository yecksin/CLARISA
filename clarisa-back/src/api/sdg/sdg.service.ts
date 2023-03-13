import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateSdgDto } from './dto/update-sdg.dto';
import { Sdg } from './entities/sdg.entity';
import { SdgRepository } from './repositories/sdg.repository';

@Injectable()
export class SdgService {
  constructor(private sdgsRepository: SdgRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<Sdg[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.sdgsRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.sdgsRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<Sdg> {
    return await this.sdgsRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateSdgDto: UpdateSdgDto[]) {
    return await this.sdgsRepository.save(updateSdgDto);
  }
}
