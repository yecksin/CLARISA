import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterEventsModule } from './shared/router-events/router-events.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TawkToModule } from './shared/components/tawk-to/tawk-to.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterEventsModule,
    TawkToModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
