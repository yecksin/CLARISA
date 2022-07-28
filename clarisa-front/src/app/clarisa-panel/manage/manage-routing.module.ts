import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage.component';

const routes: Routes = [
  {
    path:"", 
    component:ManageComponent,
    children:[
      {
        path:"manage-user",
        loadChildren: () => import('./pages/manage-user/manage-user.module').then((m) => m.ManageUserModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
