import { Module } from '@nestjs/common';
import { PolicyTypeService } from './policy-type.service';
import { PolicyTypeController } from './policy-type.controller';
import { PolicyTypeRepository } from './repositories/policy-type.repository';

@Module({
  controllers: [PolicyTypeController],
  providers: [PolicyTypeService, PolicyTypeRepository],
})
export class PolicyTypeModule {}
