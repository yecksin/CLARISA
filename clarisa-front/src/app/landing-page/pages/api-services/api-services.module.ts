import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiServicesRoutingModule } from './api-services-routing.module';
import { ApiServicesComponent } from './api-services.component';
import { ContentDashboardComponent } from './sections/content-dashboard/content-dashboard.component';
import { BannerComponent } from './sections/banner/banner.component';


@NgModule({
  declarations: [
    ApiServicesComponent,
    ContentDashboardComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    ApiServicesRoutingModule
  ]
})
export class ApiServicesModule { }
