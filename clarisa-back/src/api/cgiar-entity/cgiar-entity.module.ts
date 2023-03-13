import { Module } from '@nestjs/common';
import { CgiarEntityService } from './cgiar-entity.service';
import { CgiarEntityController } from './cgiar-entity.controller';
import { CgiarEntityRepository } from './repositories/cgiar-entity.repository';

@Module({
  controllers: [CgiarEntityController],
  providers: [CgiarEntityService, CgiarEntityRepository],
})
export class CgiarEntityModule {}
