import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss'],
})
export class VerticalMenuComponent implements OnInit {
  @Input() subCategories: any;
  @Input() urlParams: any;
  constructor(public router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(paramsUrl: SimpleChanges) {
    let isActive = paramsUrl['urlParams'].currentValue.nameEndpoint;
    let idUl = '#' + paramsUrl['urlParams'].currentValue.namesubcategory;
    $(document).ready(function () {
      if (isActive != undefined) {
        $('.endpoints').removeClass('activeSubMenu');
        $('#' + isActive).addClass('activeSubMenu');
      }
      $('.slide').removeClass('is-expanded');
      $(idUl + 1)
        .addClass('is-expanded')
        .removeClass('hide');
    });
  }

  clickMenu(idli: any) {
    const box = document.getElementById(idli + 1);
    if (box != null) {
      if (box.classList.contains('is-expanded') == true) {
        box.classList.remove('is-expanded');
      } else {
        box.classList.add('is-expanded');
      }
    }
  }
}
