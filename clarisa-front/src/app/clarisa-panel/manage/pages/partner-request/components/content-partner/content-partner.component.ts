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

  ngOnInit(): void {
    this._manageApiService.getAllPartnerRequest().subscribe((resp) => {
      this.informationParnertRequest = resp;
    });
  }
}
