import { Routes } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { apiRoutes } from './api/api.routes';
import { AuthModule } from './auth/auth.module';
import { authRoutes } from './auth/auth.routes';

export const routes: Routes = [
  {
    path: 'api',
    module: ApiModule,
    children: apiRoutes,
  },{
    path: 'auth',
    module: AuthModule,
    children: authRoutes,
  }
];
