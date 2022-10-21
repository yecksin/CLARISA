import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './components/horizontal-menu/horizontal-menu.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    DocumentationComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    ContentComponent,
  ],
  imports: [CommonModule, DocumentationRoutingModule],
})
export class DocumentationModule {}
