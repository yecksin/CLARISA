import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { BannerComponent } from './sections/banner/banner.component';
import { QuestionComponent } from './sections/question/question.component';


@NgModule({
  declarations: [
    FaqComponent,
    BannerComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
