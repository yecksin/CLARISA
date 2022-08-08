import { Module } from '@nestjs/common';
import { GlossaryService } from './glossary.service';
import { GlossaryController } from './glossary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Glossary } from './entities/glossary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Glossary])],
  controllers: [GlossaryController],
  providers: [GlossaryService],
  
})
export class GlossaryModule {}
