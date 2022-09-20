import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { routes } from './routes';
import { AuthModule } from './auth/auth.module';
import { dataSource } from './ormconfig';
import { ScheduleModule } from '@nestjs/schedule';
import { IntegrationModule } from './shared/integration/integration.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSource.options,
      keepConnectionAlive: true,
      autoLoadEntities: true,
    }),
    ScheduleModule.forRoot(),
    RouterModule.register(routes),
    ApiModule,
    AuthModule,
    IntegrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
