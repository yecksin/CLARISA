import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateGovernanceTypeDto } from './dto/update-governance-type.dto';
import { GovernanceType } from './entities/governance-type.entity';
import { GovernanceTypeRepository } from './repositories/governance-type.repository';

@Injectable()
export class GovernanceTypeService {
  constructor(private governanceTypesRepository: GovernanceTypeRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<GovernanceType[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.governanceTypesRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.governanceTypesRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<GovernanceType> {
    return await this.governanceTypesRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateGovernanceTypeDto: UpdateGovernanceTypeDto[]) {
    return await this.governanceTypesRepository.save(updateGovernanceTypeDto);
  }
}
