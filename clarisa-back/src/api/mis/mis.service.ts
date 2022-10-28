import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { UpdateMisDto } from './dto/update-mis.dto';
import { Mis } from './entities/mis.entity';

@Injectable()
export class MisService {
  constructor(
    @InjectRepository(Mis)
    private misRepository: Repository<Mis>,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<Mis[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.misRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.misRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<Mis> {
    return await this.misRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateMisDto: UpdateMisDto[]) {
    return await this.misRepository.save(updateMisDto);
  }
}
