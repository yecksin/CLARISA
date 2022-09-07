import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardsComponent } from './dashboards.component';
import { BannerComponent } from './sections/banner/banner.component';
import { ContentDashboardComponent } from './sections/content-dashboard/content-dashboard.component';
import { DashboardClarisaComponent } from './sections/dashboard-clarisa/dashboard-clarisa.component';



@NgModule({
  declarations: [
    DashboardsComponent,
    BannerComponent,
    ContentDashboardComponent,
    DashboardClarisaComponent,

  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
