import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cl-switch-field',
  templateUrl: './cl-switch-field.component.html',
  styleUrls: ['./cl-switch-field.component.scss'],
})
export class ClSwitchFieldComponent implements OnInit {
  @Input() fieldType: 'dropdown' | 'input';
  /*Paramts to field */
  @Input() attr: string;
  @Input() dataType: string;
  @Input() requied: boolean;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() description: string;
  @Input() maxWords: string;
  @Input() readOnly: boolean;

  constructor() {}

  ngOnInit(): void {}
}
