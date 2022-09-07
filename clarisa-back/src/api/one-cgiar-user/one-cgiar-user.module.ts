import { Module } from '@nestjs/common';
import { OneCgiarUserService } from './one-cgiar-user.service';
import { OneCgiarUserController } from './one-cgiar-user.controller';
import { OneCgiarUser } from './entities/one-cgiar-user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OneCgiarUser])],
  controllers: [OneCgiarUserController],
  providers: [OneCgiarUserService],
})
export class OneCgiarUserModule {}
