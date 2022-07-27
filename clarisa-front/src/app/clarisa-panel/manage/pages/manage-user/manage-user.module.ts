import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUserRoutingModule } from './manage-user-routing.module';
import { ManageUserComponent } from './manage-user.component';


@NgModule({
  declarations: [
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    ManageUserRoutingModule
  ]
})
export class ManageUserModule { }
