import { Module } from '@nestjs/common';
import { GlossaryService } from './glossary.service';
import { GlossaryController } from './glossary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Glossary } from './entities/glossary.entity';
import { GlossaryRepository } from './repositories/glossary.repository';

@Module({
  controllers: [GlossaryController],
  providers: [GlossaryService, GlossaryRepository],
})
export class GlossaryModule {}
