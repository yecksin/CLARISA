import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateSdgTargetDto } from './dto/update-sdg-target.dto';
import { SdgTarget } from './entities/sdg-target.entity';
import { SdgTargetRepository } from './repositories/sdg-target.repository';

@Injectable()
export class SdgTargetService {
  constructor(private sdgTargetsRepository: SdgTargetRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<SdgTarget[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.sdgTargetsRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.sdgTargetsRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<SdgTarget> {
    return await this.sdgTargetsRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateSdgTargetDto: UpdateSdgTargetDto[]) {
    return await this.sdgTargetsRepository.save(updateSdgTargetDto);
  }
}
