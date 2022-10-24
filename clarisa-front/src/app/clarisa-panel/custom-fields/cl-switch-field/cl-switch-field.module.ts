import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClSwitchFieldComponent } from './cl-switch-field.component';
import { CustomFieldsModule } from '../custom-fields.module';

@NgModule({
  declarations: [ClSwitchFieldComponent],
  exports: [ClSwitchFieldComponent],
  imports: [CommonModule, CustomFieldsModule],
})
export class ClSwitchFieldModule {}
