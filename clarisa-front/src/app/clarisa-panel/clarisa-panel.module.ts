import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarisaPanelRoutingModule } from './clarisa-panel-routing.module';
import { ClarisaPanelComponent } from './clarisa-panel.component';
import { DocumentationComponent } from './documentation/documentation.component';


@NgModule({
  declarations: [
    ClarisaPanelComponent,
    DocumentationComponent,
  ],
  imports: [
    CommonModule,
    ClarisaPanelRoutingModule
  ]
})
export class ClarisaPanelModule { }
