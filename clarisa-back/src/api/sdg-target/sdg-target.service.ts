import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
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

  async findAllIpsr(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<SdgTarget[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.sdgTargetsRepository.query(`select sdgt.id, sdgt.sdg_target_code as sdgTargetCode, sdgt.sdg_target as sdgTarget, sdg.id as usndCode
                                                         from sustainable_development_goal_targets sdgt 
                                                        join sustainable_development_goals sdg on sdg.id = sdgt.sdg_id`);
      case FindAllOptions.SHOW_ONLY_ACTIVE:
        return await this.sdgTargetsRepository.query(`select sdgt.id, sdgt.sdg_target_code as sdgTargetCode, sdgt.sdg_target as sdgTarget, sdg.id as usndCode
                                                         from sustainable_development_goal_targets sdgt 
                                                        join sustainable_development_goals sdg on sdg.id = sdgt.sdg_id 
                                                        where sdgt.is_active = 1`);
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.sdgTargetsRepository.query(`select sdgt.id, sdgt.sdg_target_code as sdgTargetCode, sdgt.sdg_target as sdgTarget, sdg.id as usndCode
        from sustainable_development_goal_targets sdgt 
       join sustainable_development_goals sdg on sdg.id = sdgt.sdg_id 
       where sdgt.is_active = 0`);
      default:
        throw Error('?!');
    }
  }
}
