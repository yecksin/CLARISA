import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { routes } from './routes';
import { AuthModule } from './auth/auth.module';
import { dataSourceOptions } from 'data-source-options';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      keepConnectionAlive: true,
      autoLoadEntities: true,
    }),
    RouterModule.register(routes),
    ApiModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
