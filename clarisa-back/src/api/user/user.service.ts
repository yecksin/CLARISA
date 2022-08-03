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

  async getUsersPagination(offset?: number, limit: number = 10) {
    const [items, count] = await this.usersRepository.findAndCount({
      order: {
        id: 'ASC'
      },
      skip: offset,
      take: limit
    });
   
    return {
      items,
      count
    }
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOneBy({id});
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
