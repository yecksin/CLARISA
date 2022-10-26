import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss'],
})
export class VerticalMenuComponent implements OnInit {
  @Input() subCategories: any;
  @Input() urlParams: any;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(paramsUrl: SimpleChanges) {
    let idUl = '#' + paramsUrl['urlParams'].currentValue.namesubcategory;
    $(document).ready(function () {
      $('.categoriesNoActive').addClass('hide').removeClass('visible');
      $(idUl).addClass('visible').removeClass('hide');
    });
  }
}
