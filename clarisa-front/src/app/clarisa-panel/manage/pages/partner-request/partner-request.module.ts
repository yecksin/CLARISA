import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerRequestRoutingModule } from './partner-request-routing.module';
import { PartnerRequestComponent } from './partner-request.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { ContentPartnerComponent } from './components/content-partner/content-partner.component';
import { ListInstitutionComponent } from './components/content-partner/section/list-institution/list-institution.component';
import { FormNewInstitutionComponent } from './components/content-partner/section/form-new-institution/form-new-institution.component';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormCountryOfficeComponent } from './components/content-partner/section/form-country-office/form-country-office.component';

@NgModule({
  declarations: [
    PartnerRequestComponent,
    VerticalMenuComponent,
    ContentPartnerComponent,
    ListInstitutionComponent,
    FormNewInstitutionComponent,
    FormCountryOfficeComponent,
  ],
  imports: [
    CommonModule,
    PartnerRequestRoutingModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    HttpClientModule,
    DynamicDialogModule,
  ],
})
export class PartnerRequestModule {}
