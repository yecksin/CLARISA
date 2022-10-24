import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClInputComponent } from './cl-input/cl-input.component';

const fieldsComponets = [ClInputComponent];

@NgModule({
  declarations: [...fieldsComponets],
  exports: [...fieldsComponets],
  imports: [CommonModule],
})
export class CustomFieldsModule {}
