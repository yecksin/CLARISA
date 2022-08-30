import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { CreateGovernanceTypeDto } from './dto/create-governance-type.dto';
import { UpdateGovernanceTypeDto } from './dto/update-governance-type.dto';
import { GovernanceType } from './entities/governance-type.entity';

@Injectable()
export class GovernanceTypeService {
  constructor(
    @InjectRepository(GovernanceType)
    private governanceTypesRepository: Repository<GovernanceType>,
  ) {}

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
    return await this.governanceTypesRepository.save(
      updateGovernanceTypeDto,
    );
  }
}
