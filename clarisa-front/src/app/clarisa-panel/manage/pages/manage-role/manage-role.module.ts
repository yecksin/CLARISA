import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoleRoutingModule } from './manage-role-routing.module';
import { ManageRoleComponent } from './manage-role.component';


@NgModule({
  declarations: [
    ManageRoleComponent
  ],
  imports: [
    CommonModule,
    ManageRoleRoutingModule
  ]
})
export class ManageRoleModule { }
