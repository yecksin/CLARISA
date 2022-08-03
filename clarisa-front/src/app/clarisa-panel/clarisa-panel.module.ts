import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarisaPanelRoutingModule } from './clarisa-panel-routing.module';
import { ClarisaPanelComponent } from './clarisa-panel.component';



@NgModule({
  declarations: [
    ClarisaPanelComponent,
  ],
  imports: [
    CommonModule,
    ClarisaPanelRoutingModule
  ]
})
export class ClarisaPanelModule { }
