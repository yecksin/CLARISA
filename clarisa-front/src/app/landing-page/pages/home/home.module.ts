import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './sections/header/header.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { IndicatorsComponent } from './sections/indicators/indicators.component';
import { CardIndicatorComponent } from './sections/indicators/components/card-indicator/card-indicator.component';
import { PartnersCollaboratorsComponent } from './sections/partners-collaborators/partners-collaborators.component';
import { PublicationsComponent } from './sections/publications/publications.component';
import { CardPublicationComponent } from './sections/publications/components/card-publication/card-publication.component';
import { InfoDashboardsApiServicesComponent } from './sections/info-dashboards-api-services/info-dashboards-api-services.component';




@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    IndicatorsComponent,
    CardIndicatorComponent,
    PartnersCollaboratorsComponent,
    PublicationsComponent,
    CardPublicationComponent,
    InfoDashboardsApiServicesComponent,
    
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
