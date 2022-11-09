import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { SourceOption } from '../../shared/entities/enums/source-options';
import { UpdatePolicyStageDto } from './dto/update-policy-stage.dto';
import { PolicyStage } from './entities/policy-stage.entity';

@Injectable()
export class PolicyStageService {
  constructor(
    @InjectRepository(PolicyStage)
    private policyStagesRepository: Repository<PolicyStage>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
    type: string = SourceOption.CGIAR.path,
  ): Promise<PolicyStage[]> {
    let whereClause: FindOptionsWhere<PolicyStage> = {};
    const incomingType = SourceOption.getfromPath(type);

    switch (type) {
      case SourceOption.ALL.path:
        // do nothing. no extra conditions needed
        break;
      case SourceOption.CGIAR.path:
      case SourceOption.LEGACY.path:
        whereClause = {
          ...whereClause,
          source_id: incomingType.source_id,
        };
        break;
      default:
        throw Error('?!');
    }

    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.policyStagesRepository.find({
          where: whereClause,
        });
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        whereClause = {
          ...whereClause,
          is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
        };
        return await this.policyStagesRepository.find({
          where: whereClause,
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<PolicyStage> {
    return await this.policyStagesRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updatePolicyStageDto: UpdatePolicyStageDto[]) {
    return await this.policyStagesRepository.save(updatePolicyStageDto);
  }
}
