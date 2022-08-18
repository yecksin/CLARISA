import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { DashboardsModule } from './pages/dashboards/dashboards.module';

const routes: Routes = [
  {
    path:"",
    component:LandingPageComponent,
    children:[
      {
        path:'home',
        loadChildren : () => import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        redirectTo:'home',
        path:"",
        pathMatch:"full",
      },
      {
        path:'dashboards',
        loadChildren : () => import('./pages/dashboards/dashboards.module').then((m) => m.DashboardsModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
