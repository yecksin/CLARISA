import { Module } from '@nestjs/common';
import { GeneralAcronymService } from './general-acronym.service';
import { GeneralAcronymController } from './general-acronym.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneralAcronym } from './entities/general-acronym.entity';
import { GeneralAcronymRepository } from './repositories/general-acronym.repository';

@Module({
  controllers: [GeneralAcronymController],
  providers: [GeneralAcronymService, GeneralAcronymRepository],
})
export class GeneralAcronymModule {}
