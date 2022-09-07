import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { UpdateSdgTargetDto } from './dto/update-sdg-target.dto';
import { SdgTarget } from './entities/sdg-target.entity';

@Injectable()
export class SdgTargetService {
  constructor(
    @InjectRepository(SdgTarget)
    private sdgTargetsRepository: Repository<SdgTarget>,
  ) {}

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
