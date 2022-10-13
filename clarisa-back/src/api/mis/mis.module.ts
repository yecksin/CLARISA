import { Module } from '@nestjs/common';
import { MisService } from './mis.service';
import { MisController } from './mis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mis } from './entities/mis.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mis])],
  controllers: [MisController],
  providers: [MisService],
})
export class MisModule {}
