import { Module } from '@nestjs/common';
import { BiParameterService } from './bi-parameter.service';
import { BiParameterController } from './bi-parameter.controller';
import { BiParameterRepository } from './repositories/bi-parameter.repository';

@Module({
  controllers: [BiParameterController],
  providers: [BiParameterService, BiParameterRepository],
})
export class BiParameterModule {}
