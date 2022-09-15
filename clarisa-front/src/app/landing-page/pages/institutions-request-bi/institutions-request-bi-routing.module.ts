import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionsRequestBiComponent } from './institutions-request-bi.component';

const routes: Routes = [
  {
    path: '',
    component: InstitutionsRequestBiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutionsRequestBIRoutingModule {}
