import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiServicesRoutingModule } from './api-services-routing.module';
import { ApiServicesComponent } from './api-services.component';
import { ContentDashboardComponent } from './sections/content-dashboard/content-dashboard.component';
import { BannerComponent } from './sections/banner/banner.component';
import { ServiceClarisaComponent } from './sections/service-clarisa/service-clarisa.component';


@NgModule({
  declarations: [
    ApiServicesComponent,
    ContentDashboardComponent,
    BannerComponent,
    ServiceClarisaComponent
  ],
  imports: [
    CommonModule,
    ApiServicesRoutingModule
  ]
})
export class ApiServicesModule { }
