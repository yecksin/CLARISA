import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  cardPublication = [{
    date:"April 2020",
    name:"CGIAR Level Agricultural Results Interoperable System Architecture (CLARISA) factsheet",
    posted: "David Abreu & Hector Tobon",
    description:"CLARISA is a web service that helps to transform raw data on CGIAR research and activities into meaningful information that can shape how we work, and reveal what our impacts are on development",
    link:"https://hdl.handle.net/10568/117371"
  },{
    date:"February 2021",
    name:"CLARISA Institution request protocol",
    posted: "Hector Tobon",
    description:"This short document briefly describes the protocol used by CLARISA to receive requests, from other Management Information Systems, to add new institutions that are not part of the current list",
    link:"https://hdl.handle.net/10568/117370"
  },
  {
    date:"March 2022",
    name:"Exploring CGIAR Level Agricultural Results Interoperable System Architecture (CLARISA)",
    posted: "Valentina DE COL, Margarita M Ramirez, etc.",
    description:"CLARISA (https://clarisa.cgiar.org/) is the CGIAR Level Agricultural Results Interoperable System Architecture, a web service that helps collect and transform raw data of CGIAR research and activities into standardised and aggregated information.",
    link:"https://hdl.handle.net/10568/119221"
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}
