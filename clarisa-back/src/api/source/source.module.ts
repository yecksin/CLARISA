import { Module } from '@nestjs/common';
import { SourceService } from './source.service';
import { SourceController } from './source.controller';
import { Source } from './entities/source.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SourceRepository } from './repositories/source.repository';

@Module({
  controllers: [SourceController],
  providers: [SourceService, SourceRepository],
})
export class SourceModule {}
