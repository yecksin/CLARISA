import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss'],
})
export class VerticalMenuComponent implements OnInit {
  @Input() subCategories: any;
  @Output() information = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  abrir(id: any) {
    const box = document.getElementById(id + 1);
    if (box != null) {
      if (box.style.display == 'block') {
        box.style.display = 'none';
      } else {
        box.style.display = 'block';
        this.information.emit(id);
      }

      console.log(box.style.display);
    }
  }
  clickme(menssage: any) {
    this.information.emit(menssage);
  }
}
