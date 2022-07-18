import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClarisaPanelComponent } from './clarisa-panel.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DocumentationModule } from './documentation/documentation.module';

const routes: Routes = [
  {
    path:"", 
    component:ClarisaPanelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClarisaPanelRoutingModule { }
