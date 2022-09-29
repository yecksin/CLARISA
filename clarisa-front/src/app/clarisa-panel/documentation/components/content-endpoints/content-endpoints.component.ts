import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-endpoints',
  templateUrl: './content-endpoints.component.html',
  styleUrls: ['./content-endpoints.component.scss']
})
export class ContentEndpointsComponent implements OnInit {
  @Input() metaData: any;
  @Input() infoCategories: any;
  aux : any;
  constructor() { }

  ngOnInit(): void {
    this.aux = this.infoCategories;
  }

  returnResponseJson(endpoint : any) {
    let request_json = JSON.parse(endpoint);
    let json_reponse = '{ \n';
    for (var clave in request_json.properties) {
      if (request_json.properties[clave].object_type == 'field') {
        json_reponse +=
          '\t"' +
          clave+" \" " +
          ': "' +
          request_json.properties[clave].type + "\""+
          ',\n';
      }
      if (request_json.properties[clave].object_type == 'object') {
        json_reponse += '\t"' + clave + '": {' + '\n';
        for (var subclave in request_json.properties[clave].properties) {
          json_reponse +=
            '\t\t"' +
            subclave +'"' +
            ': "' +
            request_json.properties[clave].properties[subclave].type+'"' +
            ',\n';
            
        }
        json_reponse += '\t}\n';
      }
    }
    json_reponse += '}';
    
    return json_reponse;
  }
}
