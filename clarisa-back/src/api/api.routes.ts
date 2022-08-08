import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { GlossaryModule } from './glossary/glossary.module';

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
    path: 'glossary',
    module: GlossaryModule,
  }

];
