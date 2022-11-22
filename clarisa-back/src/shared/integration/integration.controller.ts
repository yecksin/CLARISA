import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { PermissionGuard } from '../guards/permission.guard';
import { CronOST } from './ost/cron.ost';

@Controller('ost-cronjobs')
@UseGuards(JwtAuthGuard, PermissionGuard)
export class IntegrationController {
  constructor(private readonly cronOst: CronOST) {}

  @Get('initiatives')
  async updateAllInititatives() {
    this.cronOst.cronInitiativeRelatedData();
  }

  @Get('workpackages')
  async updateAllWorkpackages() {
    this.cronOst.cronWorkpackageRelatedData();
  }
}
