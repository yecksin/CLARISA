import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { RoleRepository } from '../role/repositories/role.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, RoleRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
