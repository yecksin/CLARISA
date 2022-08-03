import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-indicator',
  templateUrl: './card-indicator.component.html',
  styleUrls: ['./card-indicator.component.scss']
})
export class CardIndicatorComponent implements OnInit {
  @Input() metaDataCard: any;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
