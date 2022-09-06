import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { UpdateOneCgiarUserDto } from './dto/update-one-cgiar-user.dto';
import { OneCgiarUser } from './entities/one-cgiar-user.entity';

@Injectable()
export class OneCgiarUserService {
  constructor(
    @InjectRepository(OneCgiarUser)
    private oneCgiarUserRepository: Repository<OneCgiarUser>,
  ) {}

  async findAll(option : FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE) : Promise<OneCgiarUser[]> {
    switch(option){
      case FindAllOptions.SHOW_ALL:
        return await this.oneCgiarUserRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.oneCgiarUserRepository.find({
          where: {
            is_active : option === FindAllOptions.SHOW_ONLY_ACTIVE
          }
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<OneCgiarUser> {
    return await this.oneCgiarUserRepository.findOneBy({
      id,
      is_active : true
    });
  }

  async update(updateOneCgiarUserlDtoList: UpdateOneCgiarUserDto[]) : Promise<OneCgiarUser[]> {
    return await this.oneCgiarUserRepository.save( updateOneCgiarUserlDtoList);
  }
}
