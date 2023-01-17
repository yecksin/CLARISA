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
  statusProcess:boolean;
  menssageConfirmProcess: string;
  ngOnInit(): void {
    this.miStorage = window.localStorage.getItem('user');
    

    this.miStorage = JSON.parse(this.miStorage);
    this._manageApiService.getAllPartnerRequest().subscribe((resp) => {
      this.informationParnertRequest = resp;
    });
  }

  partnerResolve(value:any){
   if(value.status != 'Edited'){
    this.informationParnertRequest.splice(value.id, 1);
    this.statusProcess = true;
    this.menssageConfirmProcess = 'The partner '+value.status+' process has been a success.';
   }
   else{
    this.informationParnertRequest[value.id] = value.partnerInfoNew;
   }
    
  }

  indexList(page:number, num: number){
    return (num+((page-1)*10))
  }
}
