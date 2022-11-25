import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { ManageApiService } from '../../../../../../services/manage-api.service';

@Component({
  selector: 'app-request-institutions-form',
  templateUrl: './request-institutions-form.component.html',
  styleUrls: ['./request-institutions-form.component.scss'],
  providers: [MessageService],
})
export class RequestInstitutionsFormComponent implements OnInit {
  displayModal: boolean;
  type: any[];
  selectedType: any = {};
  cities: any[];
  selectedCity: any;
  display: boolean = false;
  @Input() informationContent: any;
  email: any;
  responseRejectOptions: any[];
  selectResponse: string;
  msgs: Message[] = [];
  displayConfirm: boolean = false;
  group: FormGroup;
  groups: FormGroup;
  constructor(
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder,
    private _manageApiService: ManageApiService,
    private messageService: MessageService
  ) {
    this.groups = this.formBuilder.group({
      requestId: '',
      userId: 4372,
      accept: false,
      rejectJustification: ['', Validators.required],
      misAcronym: 'CLARISA',
      externalUserMail: '',
      externalUserName: '',
      externalUserComments: '',
      spec: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.responseRejectOptions = [
      { name: 'Already exists' },
      { name: 'Already exists as PPA' },
      { name: 'Not legal' },
      { name: 'Sub-department' },
      { name: 'Person - Not institution' },
      { name: 'Country - Office' },
    ];
    this.selectedType = { country: 'India' };
  }

  showModalDialog() {
    this.displayModal = true;
  }

  displayModalReject() {
    this.display = true;
  }

  reject(value) {
    console.log(value);

    if (this.groups.valid) {
      this.confirmationService.confirm({
        message: 'Are you sure you want to decline this request?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          let infoComments = value.rejectJustification.name + ',' + value.spec;
          this.groups.controls['requestId'].setValue(
            this.informationContent.id
          );
          this.groups.controls['externalUserMail'].setValue(
            this.informationContent.externalUserMail
          );
          this.groups.controls['externalUserName'].setValue(
            this.informationContent.externalUserName
          );
          this.groups.controls['externalUserComments'].setValue(
            this.informationContent.externalUserComments
          );
          this.groups.controls['rejectJustification'].setValue(infoComments);
          this.groups.removeControl('spec');

          this._manageApiService
            .postAceptedOrRejectRequest(this.groups.value)
            .subscribe(
              (resp) => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Service Message',
                  detail: 'Via MessageService',
                });
                this.confirmationService.close();
                this.display = false;
              },
              (err) => {
                this.messageService.add({
                  severity: 'error',
                  summary: 'Service Message',
                  detail: 'Via MessageService',
                });
                this.confirmationService.close();
                this.display = false;
              }
            );
          this.groups = this.formBuilder.group({
            requestId: '',
            userId: 4372,
            accept: false,
            rejectJustification: ['', Validators.required],
            misAcronym: 'CLARISA',
            externalUserMail: '',
            externalUserName: '',
            externalUserComments: '',
            spec: ['', Validators.required],
          });
          this.msgs = [
            {
              severity: 'info',
              summary: 'Confirmed',
              detail: 'You have accepted',
            },
          ];
        },
        reject: () => {
          this.msgs = [
            {
              severity: 'info',
              summary: 'Rejected',
              detail: 'You have rejected',
            },
          ];
        },
      });
    } else {
      this.confirmationService.confirm({
        message: 'Check that you are missing some required fields.',
        icon: 'pi pi-exclamation-triangle',
        acceptVisible: false,
        rejectLabel: 'Close',
      });
    }
  }

  confirm() {
    this.displayConfirm = true;
  }

  confirmRequest() {
    this.group = this.formBuilder.group({
      requestId: this.informationContent.id,
      userId: 4372,
      accept: true,
      misAcronym: 'CLARISA',
      externalUserMail: this.informationContent.externalUserMail,
      externalUserName: this.informationContent.externalUserName,
      externalUserComments: this.informationContent.externalUserMail,
    });
    this._manageApiService
      .postAceptedOrRejectRequest(this.group.value)
      .subscribe(
        (resp) => {
          console.log(resp.hasOwnProperty('status'));

          this.messageService.add({
            severity: 'success',
            summary: 'Service Message',
            detail: 'Via MessageService',
          });
        },
        (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Service Message',
            detail: 'Via MessageService',
          });
        }
      );
    console.log(this.group.value);

    this.displayConfirm = false;
  }
}
