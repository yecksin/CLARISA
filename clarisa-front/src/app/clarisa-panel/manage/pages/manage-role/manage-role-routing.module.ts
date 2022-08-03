import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageRoleComponent } from './manage-role.component';

const routes: Routes = [
  {
    path:"", 
    component:ManageRoleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoleRoutingModule { }
