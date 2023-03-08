import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role } from './entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from './repositories/role.repository';
import { UserRepository } from '../user/repositories/user.repository';

@Module({
  controllers: [RoleController],
  providers: [RoleService, RoleRepository, UserRepository],
  exports: [RoleRepository],
})
export class RoleModule {}
