import { Component, OnInit } from '@angular/core';
import { ManageApiService } from '../../../../../../services/manage-api.service';
import readXlsxFile from 'read-excel-file';
import { SelectItem } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-partner-bulk',
  templateUrl: './partner-bulk.component.html',
  styleUrls: ['./partner-bulk.component.scss'],
})
export class PartnerBulkComponent implements OnInit {
  listNewIntitutions: any[] = [];
  users: any;
  selectedUser: any;
  mises: any;
  selectedMis: any;
  group: FormGroup;
  displayConfirm: boolean = false;
  constructor(
    private _manageApiService: ManageApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this._manageApiService.getAllUser().subscribe((resp) => {
      this.users = resp;
    });
    this._manageApiService.getAllMis().subscribe((resp) => {
      this.mises = resp;
    });
    this.group = this.formBuilder.group({
      externalUser: [null, Validators.required],
      mis: [null, Validators.required],
    });
  }

  async basicUploadSingle(file) {
    const content = await readXlsxFile(file[0]);
    let informartionInstitution: any;
    console.log(content);
    for (let i in content) {
      informartionInstitution = {};
      if (i != '0') {
        informartionInstitution['name'] = content[i][1];
        informartionInstitution['acronym'] = content[i][0];
        informartionInstitution['website_link'] = content[i][3];
        informartionInstitution['institution_type'] = content[i][2];
        informartionInstitution['country'] = content[i][4];
        informartionInstitution['status'] = content[i][5];
        informartionInstitution['justification'] = content[i][6];
        this.listNewIntitutions.push(informartionInstitution);
      }
    }
  }

  accepted(value: any) {
    let miStorage = window.localStorage.getItem('user');
    miStorage = JSON.parse(miStorage);

    value['externalUserEmail'] = value.externalUser.email;
    value['externalUserName'] = value.externalUser.first_name;
    value.externalUser = value.externalUser.id;
    value.mis = value.mis.id;
    value['accepted'] = miStorage['id'];
    value['listPartnerRequest'] = this.listNewIntitutions;
    console.log(value);

    if (
      value.externalUserEmail != undefined &&
      value.externalUserName != undefined &&
      value.externalUser != undefined &&
      value.mis != undefined
    ) {
      this.displayConfirm = true;
      this._manageApiService
        .postCreateBulkInstitution(value)
        .subscribe((resp) => {
          console.log(resp);
          this.displayConfirm = false;
        });
      this.group = this.formBuilder.group({
        externalUser: [null, Validators.required],
        mis: [null, Validators.required],
      });
    } else {
      alert('There are undefined fields');
    }
  }
}
