import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-publication',
  templateUrl: './card-publication.component.html',
  styleUrls: ['./card-publication.component.scss']
})
export class CardPublicationComponent implements OnInit {
  @Input() metaDataCardpublications: any;
  constructor() { }

  ngOnInit(): void {
  }

}
