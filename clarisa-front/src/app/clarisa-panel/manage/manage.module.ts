import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { HorizontalMenuComponent } from './components/horizontal-menu/horizontal-menu.component';

@NgModule({
  declarations: [ManageComponent, HorizontalMenuComponent],
  imports: [CommonModule, ManageRoutingModule],
})
export class ManageModule {}
