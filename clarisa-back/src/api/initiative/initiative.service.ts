import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { CreateInitiativeDto } from './dto/create-initiative.dto';
import { InitiativeDto } from './dto/initiative.dto';
import { UpdateInitiativeDto } from './dto/update-initiative.dto';
import { Initiative } from './entities/initiative.entity';
import { InitiativeRepository } from './repositories/initiative.repository';

@Injectable()
export class InitiativeService {
  constructor(private initiativesRepository: InitiativeRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<InitiativeDto[]> {
    if (!Object.values<string>(FindAllOptions).includes(option)) {
      throw Error('?!');
    }

    return this.initiativesRepository.findAllInitiatives(option);
  }

  async findOne(id: number): Promise<Initiative> {
    return await this.initiativesRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateInitiativeDto: UpdateInitiativeDto[]) {
    return await this.initiativesRepository.save(updateInitiativeDto);
  }
}
