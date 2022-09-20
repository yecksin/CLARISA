import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiServicesComponent } from './api-services.component';

const routes: Routes = [
  {
    path: '',
    component: ApiServicesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiServicesRoutingModule { }
