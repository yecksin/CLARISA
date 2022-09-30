import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navegation-vertical',
  templateUrl: './navegation-vertical.component.html',
  styleUrls: ['./navegation-vertical.component.scss'],
})
export class NavegationVerticalComponent implements OnInit {
  @Input() subCategories: any;
  @Output() information = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      var estad = true;

      $('.open-bar-1').on('click', function () {
        var ids: any = $(this).attr('id');
        var num = ids.substr(ids.length - 2);
        const box = document.getElementById(ids + 1);
        if (box != null) {
          box.style.display = 'block';
        }
        $('.pruba')
          .addClass('hide')
          .filter(function () {
            return $(this).attr('id') ==  ids +1;
          })
          .removeClass('hide');
      });
    });
    console.log(this.subCategories);
  }
  clickme(cual: any) {
    this.information.emit(cual);
  }
}
