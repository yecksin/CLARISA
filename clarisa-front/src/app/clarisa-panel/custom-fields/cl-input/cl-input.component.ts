import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cl-input',
  templateUrl: './cl-input.component.html',
  styleUrls: ['./cl-input.component.scss'],
})
export class ClInputComponent implements OnInit {
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
