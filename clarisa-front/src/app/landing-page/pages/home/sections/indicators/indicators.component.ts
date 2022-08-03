import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {
  cardIndicator = [{
    name:"Melia Studies",
    icon: "fa fa-book",
    numberIndicator:"500"
  },{
    name:"Polices",
    icon: "fa fa-address-book",
    numberIndicator:"200"
  },
  {
    name:"Innovations",
    icon: "fa fa-lightbulb-o",
    numberIndicator:"100"
  },
  {
    name:"Institutions",
    icon: "fa fa-university",
    numberIndicator:"596"
  },
  {
    name:"Countries",
    icon: "fa fa-globe",
    numberIndicator:"854"
  },
  {
    name:"Peer Reviewed",
    icon: "fa fa-newspaper-o",
    numberIndicator:"752"
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}
