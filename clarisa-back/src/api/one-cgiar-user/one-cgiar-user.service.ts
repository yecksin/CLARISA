import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateOneCgiarUserDto } from './dto/update-one-cgiar-user.dto';
import { OneCgiarUser } from './entities/one-cgiar-user.entity';
import { OneCgiarUserRepository } from './repositories/one-cgiar-user.repository';

@Injectable()
export class OneCgiarUserService {
  constructor(private oneCgiarUserRepository: OneCgiarUserRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<OneCgiarUser[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.oneCgiarUserRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.oneCgiarUserRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<OneCgiarUser> {
    return await this.oneCgiarUserRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(
    updateOneCgiarUserlDtoList: UpdateOneCgiarUserDto[],
  ): Promise<OneCgiarUser[]> {
    return await this.oneCgiarUserRepository.save(updateOneCgiarUserlDtoList);
  }
}
