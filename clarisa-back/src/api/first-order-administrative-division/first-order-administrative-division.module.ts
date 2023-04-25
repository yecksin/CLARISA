import { Module } from '@nestjs/common';
import { FirstOrderAdministrativeDivisionService } from './first-order-administrative-division.service';
import { FirstOrderAdministrativeDivisionController } from './first-order-administrative-division.controller';
import { ApiGeoNames } from '../../shared/integration/ost/api.geonames';
import { HttpService, HttpModule } from '@nestjs/axios';
import { IntegrationModule } from '../../shared/integration/integration.module';

@Module({
  controllers: [FirstOrderAdministrativeDivisionController],
  imports: [HttpModule],
  providers: [FirstOrderAdministrativeDivisionService, ApiGeoNames, HttpModule]
})
export class FirstOrderAdministrativeDivisionModule { }
