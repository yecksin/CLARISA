import { Module } from '@nestjs/common';
import { CgiarEntityTypeService } from './cgiar-entity-type.service';
import { CgiarEntityTypeController } from './cgiar-entity-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CgiarEntityType } from './entities/cgiar-entity-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CgiarEntityType])],
  controllers: [CgiarEntityTypeController],
  providers: [CgiarEntityTypeService]
})
export class CgiarEntityTypeModule {}
