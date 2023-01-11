import { Module } from '@nestjs/common';
import { BiParameterService } from './bi-parameter.service';
import { BiParameterController } from './bi-parameter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiParameter } from './entities/bi-parameter.entity';
import { BiParameterRepository } from './repositories/bi-parameter.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BiParameter])],
  controllers: [BiParameterController],
  providers: [BiParameterService, BiParameterRepository],
})
export class BiParameterModule {}
