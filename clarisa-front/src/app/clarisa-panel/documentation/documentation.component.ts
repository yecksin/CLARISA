import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { endpointsInfo } from './metadata/endpoints-information';
import { EndpointsInformationService } from './services/endpoints-information.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent implements OnInit {
  endPointsInformation: any = [];
  endpointsFilterInformation: any;
  categoriaSelection: any;
  constructor(
    private rutaActiva: ActivatedRoute,
    private _manageApiService: EndpointsInformationService
  ) {}

  ngOnInit(): void {
    this.rutaActiva.snapshot.params['parameter'];
    this.endPointsInformation = endpointsInfo;
    this.endPointsInformation.find((x:any) => {
      if(x.name == this.rutaActiva.snapshot.params['parameter']){
        this.endpointsFilterInformation = x;
      }
    })
  }
  getMensaje(e: any) {
    
    this.categoriaSelection = this.endpointsFilterInformation.subcategories.find((object: any) => {
      if (object.name == e) return object;
    });
    
  }

}
