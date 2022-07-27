import { Component, OnInit } from '@angular/core';
import { ManageApiService } from './services/manage-api.service';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  constructor(private _manageApiService:ManageApiService) { }

  ngOnInit(): void {
    this._manageApiService.getAllUser().subscribe(resp => {
      console.log(resp);
    });
  }

}
