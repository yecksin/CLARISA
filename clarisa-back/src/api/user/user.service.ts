import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepository.find();
    //return 'test';
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findOneByEmail(email:string): Promise<User> {
    const user: User = await this.usersRepository.findOneBy({email});
    //TODO: borrar contraseña
    return user;
  }

  async findOneByUsername(username:string): Promise<User> {
    const user: User = await this.usersRepository.findOneBy({username});

    return user;
  }

  async update(updateUserDtoList: UpdateUserDto[]) {
    return await this.usersRepository.save(updateUserDtoList);
  }
}
