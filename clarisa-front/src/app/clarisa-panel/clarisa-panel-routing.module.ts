import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClarisaPanelComponent } from './clarisa-panel.component';


const routes: Routes = [
  {
    path:"", 
    component:ClarisaPanelComponent,
    children:[
      {
        path:"documentation",
        loadChildren: () => import('./documentation/documentation.module').then((m) => m.DocumentationModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClarisaPanelRoutingModule { }
