import { Module } from '@nestjs/common';
import { PolicyTypeService } from './policy-type.service';
import { PolicyTypeController } from './policy-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PolicyType } from './entities/policy-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PolicyType])],
  controllers: [PolicyTypeController],
  providers: [PolicyTypeService],
})
export class PolicyTypeModule {}
