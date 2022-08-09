import { ActionAreaModule } from './action-area/action-area.module';
import { ImpactAreaModule } from './impact-area/impact-area.module';
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
  {
    path: 'action-areas',
    module: ActionAreaModule,
  },
  {
    path: 'impact-areas',
    module: ImpactAreaModule,
  },
];
