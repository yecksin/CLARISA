import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralInterceptorService } from '../../../shared/interceptors/auth-interceptor.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class LoginModule {}
