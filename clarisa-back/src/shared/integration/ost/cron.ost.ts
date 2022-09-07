import { Cron, CronExpression } from '@nestjs/schedule';
import { Injectable, Logger } from '@nestjs/common';
import { ApiOST } from './api.ost';
import { InjectRepository } from '@nestjs/typeorm';
import { Workpackage } from 'src/api/workpackage/entities/workpackage.entity';
import { Repository } from 'typeorm';
import { WorkpackageOSTDto } from './dto/workpackage.ost.dto';

@Injectable()
export class CronOST {
  private readonly logger = new Logger(CronOST.name);
  constructor(
    private readonly api: ApiOST,
    @InjectRepository(Workpackage)
    workpackageRepository: Repository<Workpackage>,
  ) {}

  //@Cron(CronExpression.EVERY_10_SECONDS)
  public testingCron() {
    /*this.api.getWorkpackages().subscribe({next(value) {
            let response: WorkpackageOSTDto[] = value.data?.response?.workpackages as WorkpackageOSTDto[];
            console.log(response);
        },})*/
    this.logger.debug('chron');
  }
}
