import { Module } from '@nestjs/common';
import { SdgService } from './sdg.service';
import { SdgController } from './sdg.controller';
import { Sdg } from './entities/sdg.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SdgRepository } from './repositories/sdg.repository';

@Module({
  controllers: [SdgController],
  providers: [SdgService, SdgRepository],
})
export class SdgModule {}
