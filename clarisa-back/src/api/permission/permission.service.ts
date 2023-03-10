import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';
import { PermissionRepository } from './repositories/permission.repository';

@Injectable()
export class PermissionService {
  constructor(private permissionRepository: PermissionRepository) {}

  async findAll(option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE) {
    if (!Object.values<string>(FindAllOptions).includes(option)) {
      throw Error('?!');
    }

    return this.permissionRepository.findAllPermissions(option);
  }

  async findOne(id: number): Promise<Permission> {
    return await this.permissionRepository.findOneBy({
      id,
      is_active: true,
    });
  }
}
