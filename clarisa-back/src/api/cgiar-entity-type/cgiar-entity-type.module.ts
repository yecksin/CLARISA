import { Module } from '@nestjs/common';
import { CgiarEntityTypeService } from './cgiar-entity-type.service';
import { CgiarEntityTypeController } from './cgiar-entity-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CgiarEntityType } from './entities/cgiar-entity-type.entity';
import { CgiarEntityTypeRepository } from './repositories/cgiar-entity-type.repository';

@Module({
  controllers: [CgiarEntityTypeController],
  providers: [CgiarEntityTypeService, CgiarEntityTypeRepository],
})
export class CgiarEntityTypeModule {}
