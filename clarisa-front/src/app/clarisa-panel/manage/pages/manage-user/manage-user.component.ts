import { Component, OnInit } from '@angular/core';
import { ManageApiService } from '../../services/manage-api.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  constructor(private _manageApiService:ManageApiService) { }

  ngOnInit(): void {
    this._manageApiService.getAllUser().subscribe(resp => {
      console.log(resp);
    });
  }

}
