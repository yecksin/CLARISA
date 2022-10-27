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

  ngOnInit(): void {
    let idUl = '#' + this.urlParams.namesubcategory;

    $(document).ready(function () {
      $(idUl + 1)
        .addClass('is-expanded')
        .removeClass('hide');
    });
  }

  ngOnChanges(paramsUrl: SimpleChanges) {
    let isActive = paramsUrl['urlParams'].currentValue.nameEndpoint;
    $(document).ready(function () {
      if (isActive != undefined) {
        $('#' + isActive).addClass('activeSubMenu');
      }
    });
  }

  clickMenu(idli: any) {
    $(document).ready(function () {
      let element = document.getElementById(idli + 1);
      if (element.classList.contains('is-expanded') == true) {
        console.log('entre');
        $('.slide').removeClass('is-expanded');
      } else {
        $('.slide').removeClass('is-expanded');
        $('#' + idli + 1)
          .addClass('is-expanded')
          .removeClass('hide');
      }
    });
  }

  reloadComponent(parameter) {
    let currentRoute = this.router.routerState.snapshot.url;
    console.log(parameter);
    this.router.navigate([currentRoute]);
    setTimeout(() => {
      this.router.navigate([parameter]);
    });
    //console.log(“Reload”);
  }
}
