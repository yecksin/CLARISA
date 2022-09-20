import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { UpdateGeneralAcronymDto } from './dto/update-general-acronym.dto';
import { GeneralAcronym } from './entities/general-acronym.entity';

@Injectable()
export class GeneralAcronymService {
  constructor(
    @InjectRepository(GeneralAcronym)
    private generalAcronimRepository: Repository<GeneralAcronym>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<GeneralAcronym[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.generalAcronimRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.generalAcronimRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<GeneralAcronym> {
    return await this.generalAcronimRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(
    updateGeneralDtoList: UpdateGeneralAcronymDto[],
  ): Promise<GeneralAcronym[]> {
    return await this.generalAcronimRepository.save(updateGeneralDtoList);
  }
}
