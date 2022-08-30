import { Module } from '@nestjs/common';
import { CgiarEntityService } from './cgiar-entity.service';
import { CgiarEntityController } from './cgiar-entity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CgiarEntity } from './entities/cgiar-entity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CgiarEntity])],
  controllers: [CgiarEntityController],
  providers: [CgiarEntityService]
})
export class CgiarEntityModule {}
