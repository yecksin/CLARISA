import { ActionAreaModule } from './action-area/action-area.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { GlossaryModule } from './glossary/glossary.module';
import { GlobalTargetsModule } from './global_targets/global_targets.module';

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
    path: 'glossary',
    module: GlossaryModule,
  },
  {
    path: 'global_targets',
    module: GlobalTargetsModule,
  }

];
