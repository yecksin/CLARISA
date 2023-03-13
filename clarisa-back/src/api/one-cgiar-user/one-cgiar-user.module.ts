import { Module } from '@nestjs/common';
import { OneCgiarUserService } from './one-cgiar-user.service';
import { OneCgiarUserController } from './one-cgiar-user.controller';
import { OneCgiarUserRepository } from './repositories/one-cgiar-user.repository';

@Module({
  controllers: [OneCgiarUserController],
  providers: [OneCgiarUserService, OneCgiarUserRepository],
})
export class OneCgiarUserModule {}
