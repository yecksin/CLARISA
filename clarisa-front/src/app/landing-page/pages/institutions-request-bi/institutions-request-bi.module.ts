import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionsRequestBIRoutingModule } from './institutions-request-bi-routing.module';
import { InstitutionsRequestBiComponent } from './institutions-request-bi.component';
import { HeaderComponent } from './sections/header/header.component';
import { IframeInstituionComponent } from './sections/iframe-institution/iframe-institution.component';
import { ContentInstiRequestComponent } from './sections/content-insti-request/content-insti-request.component';

@NgModule({
  declarations: [
    InstitutionsRequestBiComponent,
    HeaderComponent,
    IframeInstituionComponent,
    ContentInstiRequestComponent,
  ],
  imports: [CommonModule, InstitutionsRequestBIRoutingModule],
})
export class InstitutionsRequestBIModule {}
