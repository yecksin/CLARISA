import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss'],
})
export class NavegationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      var estad = true;
      $('.open-1').on('click', function () {
        var ids: any = $(this).attr('id');
        var num = ids.substr(ids.length - 1);
        const box = document.getElementById(ids + 1);
        if (box != null) {
          if (box.style.display == 'block') {
            box.style.display = 'none';
            estad = true;
          } else {
            box.style.display = 'block';
            estad = false;
          }
        }
      });
    });
  }

  reload(){
    setTimeout(()=>{
      window.location.reload();
    }, 100)
    
  }
}
