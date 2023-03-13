import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleRepository } from './repositories/role.repository';
import { UserRepository } from '../user/repositories/user.repository';
import { RolePermissionRepository } from './repositories/role-permission.repository';

@Module({
  controllers: [RoleController],
  providers: [
    RoleService,
    RoleRepository,
    UserRepository,
    RolePermissionRepository,
  ],
  exports: [RoleRepository],
})
export class RoleModule {}
