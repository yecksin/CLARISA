import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {routes} from './routes';

import * as ormconfig from '../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormconfig, 
      keepConnectionAlive: true, 
      autoLoadEntities: true
    }),
    RouterModule.register(routes),
    ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
