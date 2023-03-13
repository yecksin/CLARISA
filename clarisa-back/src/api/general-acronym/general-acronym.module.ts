import { Module } from '@nestjs/common';
import { GeneralAcronymService } from './general-acronym.service';
import { GeneralAcronymController } from './general-acronym.controller';
import { GeneralAcronymRepository } from './repositories/general-acronym.repository';

@Module({
  controllers: [GeneralAcronymController],
  providers: [GeneralAcronymService, GeneralAcronymRepository],
})
export class GeneralAcronymModule {}
