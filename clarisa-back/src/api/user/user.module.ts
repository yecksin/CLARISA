import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repositories/user.repository';
import { RoleRepository } from '../role/repositories/role.repository';
import { UserMisRepository } from './repositories/user-mis.repository';
import { UserRoleRepository } from './repositories/user-role.repository';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    RoleRepository,
    UserMisRepository,
    UserRoleRepository,
  ],
  exports: [UserService, UserRepository],
})
export class UserModule {}
