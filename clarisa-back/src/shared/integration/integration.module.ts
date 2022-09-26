import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workpackage } from 'src/api/workpackage/entities/workpackage.entity';
import { ApiOST } from './ost/api.ost';
import { CronOST } from './ost/cron.ost';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Workpackage])],
  providers: [CronOST, ApiOST],
  exports: [ApiOST, HttpModule],
})
export class IntegrationModule {}
