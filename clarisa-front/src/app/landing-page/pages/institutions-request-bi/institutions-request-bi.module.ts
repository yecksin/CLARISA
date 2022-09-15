import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionsRequestBIRoutingModule } from './institutions-request-bi-routing.module';
import { InstitutionsRequestBiComponent } from './institutions-request-bi.component';
import { HeaderComponent } from './sections/header/header.component';
import { IframeInstituionComponent } from './sections/iframe-institution/iframe-institution.component';

@NgModule({
  declarations: [
    InstitutionsRequestBiComponent,
    HeaderComponent,
    IframeInstituionComponent,
  ],
  imports: [CommonModule, InstitutionsRequestBIRoutingModule],
})
export class InstitutionsRequestBIModule {}
