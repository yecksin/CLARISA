import { Module } from '@nestjs/common';
import { InnovationTypeService } from './innovation-type.service';
import { InnovationTypeController } from './innovation-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InnovationType } from './entities/innovation-type.entity';
import { InnovationTypeRepository } from './repositories/innovation-type.repository';

@Module({
  controllers: [InnovationTypeController],
  providers: [InnovationTypeService, InnovationTypeRepository],
})
export class InnovationTypeModule {}
