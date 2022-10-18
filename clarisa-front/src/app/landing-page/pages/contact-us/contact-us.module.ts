import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { BannerComponent } from './sections/banner/banner.component';
import { ContentContactUsComponent } from './sections/content-contact-us/content-contact-us.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    BannerComponent,
    ContentContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
