import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService, Message } from 'primeng/api';

@Component({
  selector: 'app-request-institutions-form',
  templateUrl: './request-institutions-form.component.html',
  styleUrls: ['./request-institutions-form.component.scss'],
})
export class RequestInstitutionsFormComponent implements OnInit {
  displayModal: boolean;
  type: any[];
  selectedType: any;
  cities: any[];
  selectedCity: any;
  display: boolean = false;
  @Input() informationContent: any;
  email: any;
  responseRejectOptions: any[];
  selectResponse: string;
  msgs: Message[] = [];
  displayConfirm: boolean = false;
  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.responseRejectOptions = [
      { name: 'Already exists' },
      { name: 'Already exists as PPA' },
      { name: 'Not legal' },
      { name: 'Sub-department' },
      { name: 'Person - Not institution' },
      { name: 'Country - Office' },
    ];
  }

  showModalDialog() {
    this.displayModal = true;
  }

  displayModalReject() {
    this.display = true;
  }

  confirm() {
    this.displayConfirm = true;
  }
}
