import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { NavegationVerticalComponent } from './components/navegation-vertical/navegation-vertical.component';
import { ContentEndpointsComponent } from './components/content-endpoints/content-endpoints.component';
import { SubMenuComponent } from './components/navegation-vertical/sections/sub-menu/sub-menu.component';


@NgModule({
  declarations: [
    DocumentationComponent,
    NavegationComponent,
    NavegationVerticalComponent,
    ContentEndpointsComponent,
    SubMenuComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule
  ]
})
export class DocumentationModule { }
