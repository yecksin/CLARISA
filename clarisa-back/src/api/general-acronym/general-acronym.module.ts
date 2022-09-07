import { Module } from '@nestjs/common';
import { GeneralAcronymService } from './general-acronym.service';
import { GeneralAcronymController } from './general-acronym.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneralAcronym } from './entities/general-acronym.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GeneralAcronym])],
  controllers: [GeneralAcronymController],
  providers: [GeneralAcronymService],
})
export class GeneralAcronymModule {}
