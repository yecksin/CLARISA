import { Module } from '@nestjs/common';
import { InnovationTypeService } from './innovation-type.service';
import { InnovationTypeController } from './innovation-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InnovationType } from './entities/innovation-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InnovationType])],
  controllers: [InnovationTypeController],
  providers: [InnovationTypeService]
})
export class InnovationTypeModule {}
