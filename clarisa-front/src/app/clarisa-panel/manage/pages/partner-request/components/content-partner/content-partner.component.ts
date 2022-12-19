import { Component, OnInit } from '@angular/core';
import { ManageApiService } from '../../../../services/manage-api.service';


@Component({
  selector: 'app-content-partner',
  templateUrl: './content-partner.component.html',
  styleUrls: ['./content-partner.component.scss'],
})
export class ContentPartnerComponent implements OnInit {
  informationParnertRequest: any;
  constructor(private _manageApiService: ManageApiService) {}
  p: number = 1;
  miStorage: any;

  ngOnInit(): void {
    this.miStorage = window.localStorage.getItem('user');
    console.log(window.localStorage);

    this.miStorage = JSON.parse(this.miStorage);
    this._manageApiService.getAllPartnerRequest().subscribe((resp) => {
      this.informationParnertRequest = resp;
    });
  }

}
