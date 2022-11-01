import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { routes } from './routes';
import { ScheduleModule } from '@nestjs/schedule';
import { IntegrationModule } from './shared/integration/integration.module';
import { User } from './api/user/entities/user.entity';
import { dataSource } from './ormconfig';
import { AuthModule } from './auth/auth.module';
import { UserService } from './api/user/user.service';
import { APP_GUARD } from '@nestjs/core';
import { GuardsModule } from './shared/guards/guards.module';
import { BasicAuthMiddleware } from './shared/guards/basic-auth.middleware';
import { ApiController } from './api/api.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSource.options,
      keepConnectionAlive: true,
      autoLoadEntities: true,
    }),
    ScheduleModule.forRoot(),
    RouterModule.register(routes),
    TypeOrmModule.forFeature([User]),
    ApiModule,
    AuthModule,
    IntegrationModule,
    GuardsModule,
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(BasicAuthMiddleware)
      .forRoutes({ path: 'api/*', method: RequestMethod.POST });
  }
}
