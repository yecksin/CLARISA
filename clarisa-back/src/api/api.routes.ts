import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

export const apiRoutes = [
  {
    path: 'users',
    module: UserModule,
  },
  {
    path: 'roles',
    module: RoleModule,
  },
];
