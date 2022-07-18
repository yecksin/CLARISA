import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

export const apiRoutes = [
  {
    path: 'user',
    module: UserModule
  },{
    path:'role',
    module:RoleModule
  }
];