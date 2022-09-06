import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';


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
      {
        path:'api-services',
        loadChildren : () => import('./pages/api-services/api-services.module').then((m) => m.ApiServicesModule),
      },
      {
        path:'faq',
        loadChildren : () => import('./pages/faq/faq.module').then((m) => m.FaqModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
