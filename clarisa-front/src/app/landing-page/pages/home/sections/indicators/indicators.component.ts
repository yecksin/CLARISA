import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss'],
})
export class IndicatorsComponent implements OnInit {
  cardIndicator = [
    {
      name: 'Melia Studies',
      icon: 'fa fa-book',
      numberIndicator: '372',
    },
    {
      name: 'Polices',
      icon: 'fa fa-address-book',
      numberIndicator: '501',
    },
    {
      name: 'Innovations',
      icon: 'fa fa-lightbulb-o',
      numberIndicator: '6108',
    },
    {
      name: 'Initiatives',
      icon: 'fa fa-globe ',
      numberIndicator: '35',
    },
    {
      name: 'Institutions',
      icon: 'fa fa-university',
      numberIndicator: '7060',
    },
    {
      name: 'Worckpackages',
      icon: 'fa fa-newspaper-o',
      numberIndicator: '156',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
