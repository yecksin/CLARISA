import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EndpointsInformationService } from '../../services/endpoints-information.service';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as FileSaver from 'file-saver';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input() information: any;
  @Input() urlParams: any;
  arrayColumns = [];
  keysTable = [];
  responseJsonPrint: any;
  informationPrint: any;
  informationEndpoint: any;
  findColumns: string[] = [];
  first = 0;
  dialogVisible: boolean;
  rows = 10;
  loading: boolean = true;
  urlClarisa: string;
  constructor(private _manageApiService: EndpointsInformationService) {}

  ngOnInit(): void {
    this.loading = true;
    if (environment.production) {
      this.urlClarisa = environment.apiUrl;
    } else {
      this.urlClarisa = environment.apiUrl;
    }
  }

  ngOnChanges(paramsUrl: SimpleChanges) {
    console.log(paramsUrl);

    if (Object.keys(this.urlParams).length == 2) {
      let variableAux = paramsUrl['urlParams'].currentValue.namesubcategory
        .split('_')
        .join(' ');
      this.information.subcategories.find((x: any) => {
        if (variableAux != undefined) {
          if (x.name == variableAux) {
            this.informationPrint = x;
          }
        }
      });
    }
    if (Object.keys(this.urlParams).length == 3) {
      let variableAux = paramsUrl['urlParams'].currentValue.namesubcategory
        .split('_')
        .join(' ');
      let variableAuxi = paramsUrl['urlParams'].currentValue.nameEndpoint
        .split('_')
        .join(' ');
      this.information.subcategories.find((x: any) => {
        if (variableAux != undefined) {
          if (x.name == variableAux) {
            this.informationPrint = x;
          }
        }
      });
      this.informationPrint.endpoints.find((x: any) => {
        if (variableAux != undefined) {
          if (x.name == variableAuxi) {
            this.informationPrint = x;
          }
        }
      });
      this._manageApiService
        .getAnyEndpoint(this.informationPrint.route)
        .subscribe((resp) => {
          this.informationEndpoint = resp;
          this.loading = false;
        });
    }
  }

  iniciativeEndInformation() {
    var auxVariable = JSON.parse(this.informationPrint.response_json);
    this.arrayColumns = this.columnsTable(auxVariable.properties);
    this.findColumns = [];
    for (let i of this.arrayColumns) {
      this.findColumns.push(i[1]);
    }
    return this.arrayColumns;
  }

  returnResponseJson() {
    var auxVariable = JSON.parse(this.informationPrint.response_json);
    this.responseJsonPrint = this.response_json(
      auxVariable.properties,
      auxVariable.object_type,
      1
    );

    return this.setCharAt(
      this.responseJsonPrint,
      this.responseJsonPrint.lastIndexOf(','),
      ''
    );
  }

  //In this function we organize the response in json type.
  response_json(listResponse, typeResponse, subObject) {
    let variable = '';
    var auxList = listResponse;
    var countSpace = subObject;
    if (typeResponse == 'list' && countSpace == 1) {
      variable = '[ \n { ';
    }
    if (typeResponse == 'list' && countSpace != 1) {
      variable = '[ \n' + '\t'.repeat(countSpace) + '{ ';
    }
    if (typeResponse == 'object') {
      variable = '{';
    }
    for (let i in auxList) {
      if (auxList[i].object_type == 'object') {
        variable = variable + '\n' + '\t'.repeat(countSpace) + '"' + i + '":';
        variable =
          variable +
          this.response_json(
            auxList[i].properties,
            auxList[i].object_type,
            countSpace + 1
          );
      } else if (auxList[i].object_type == 'list') {
        variable = variable + '\n' + '\t'.repeat(countSpace) + '"' + i + '":';
        variable =
          variable +
          this.response_json(
            auxList[i].properties,
            auxList[i].object_type,
            countSpace + 1
          );
      } else {
        variable =
          variable +
          '\n ' +
          '\t'.repeat(countSpace) +
          '"' +
          i +
          '" : " ' +
          auxList[i].type +
          '", ';
      }
    }
    if (typeResponse == 'list' && countSpace == 1) {
      variable = variable + ' \n } \n]';
    }
    if (typeResponse == 'list' && countSpace != 1) {
      variable =
        variable +
        ' \n ' +
        '\t'.repeat(countSpace) +
        '}\n' +
        '\t'.repeat(countSpace - 1) +
        ']';
    }
    if (typeResponse == 'object') {
      variable = variable + '\n ' + '\t'.repeat(countSpace - 1) + '}';
    }

    return variable;
  }

  //With this function delete last character with example the comma (,)
  setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }

  columnsTable(listaAux) {
    var endpointJsonOnes = listaAux;
    var columns = [];
    for (let i in endpointJsonOnes) {
      if (
        endpointJsonOnes[i].show_in_table == true &&
        endpointJsonOnes[i].object_type != 'object' &&
        endpointJsonOnes[i].object_type != 'list'
      ) {
        columns[endpointJsonOnes[i].order] = [
          endpointJsonOnes[i].column_name,
          i,
          endpointJsonOnes[i].object_type,
        ];
      }
      if (endpointJsonOnes[i].object_type == 'object') {
        if (endpointJsonOnes[i].show_in_table == true) {
          columns[endpointJsonOnes[i].order] = [
            endpointJsonOnes[i].column_name,
            i,
            endpointJsonOnes[i].object_type,
            this.columnsTable(endpointJsonOnes[i].properties),
          ];
        }
      }
      if (endpointJsonOnes[i].object_type == 'list') {
        if (endpointJsonOnes[i].show_in_table == true) {
          columns[endpointJsonOnes[i].order] = [
            endpointJsonOnes[i].column_name,
            i,
            endpointJsonOnes[i].object_type,
            this.columnsTable(endpointJsonOnes[i].properties),
          ];
        }
      }
    }
    return columns;
  }

  exportPdf() {
    let d = new Date();
    let columns = [];
    let information = [];
    this.arrayColumns.map((x) => {
      columns.push(x[0]);
    });
    for (let k of this.exportInformation()) {
      information.push(Object.values(k));
    }
    const doc = new jsPDF();
    autoTable(doc, {
      head: [columns],
      body: information,
      didDrawPage: (dataArg) => {
        doc.text(this.informationPrint.name, dataArg.settings.margin.left, 10);
      },
    });
    doc.save(
      'clarisa ' +
        this.informationPrint.name +
        d.getFullYear() +
        (d.getMonth() + 1) +
        d.getDate() +
        d.getHours() +
        d.getMinutes() +
        '.pdf'
    );
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.exportInformation());
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'Clarisa ');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let d = new Date();
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName +
        this.informationPrint.name +
        d.getFullYear() +
        (d.getMonth() + 1) +
        d.getDate() +
        d.getHours() +
        d.getMinutes() +
        EXCEL_EXTENSION
    );
  }

  exportInformation() {
    let exportInformation = [];
    let objectFormat = {};
    var infoListUnque = '';
    var infoListObject = '';
    var infoObject = '';
    for (let i of this.informationEndpoint) {
      objectFormat = {};
      infoListUnque = '';
      infoListObject = '';
      infoObject = '';
      for (let k of this.arrayColumns) {
        if (k[2] == 'field') {
          objectFormat[k[1]] = i[k[1]];
        }
        if (k[2] == 'object') {
          if (i[k[1]] != null) {
            for (let j of k[3]) {
              if (j[0] != '' && j[0] != null) {
                infoObject = infoObject + j[0] + ' : ' + i[k[1]][j[1]] + '\n';
                objectFormat[k[1]] = infoObject;
              }
              if (j[0] == '' || j[0] == null) {
                objectFormat[k[1]] = infoObject + i[k[1]][j[1]] + '\n';
              }
            }
          }
          if (i[k[1]] == null) {
            objectFormat[k[1]] = '';
          }
        }
        if (k[2] == 'list') {
          if (i[k[1]] != null) {
            if (k[3].length == 1) {
              for (let j of i[k[1]]) {
                infoListUnque += j[k[3][0][1]] + ',' + '\n';
              }

              objectFormat[k[1]] = infoListUnque;
            }
            if (k[3].length != 1) {
              for (let j of i[k[1]]) {
                for (let p of k[3]) {
                  if (p[0] != null && p[0] != '') {
                    infoListObject =
                      infoListObject + p[0] + ' : ' + j[p[1]] + '\n';
                  }
                  if (p[0] == null || p[0] == '') {
                    infoListObject = infoListObject + j[p[1]] + '\n';
                  }
                }
              }
              objectFormat[k[1]] = infoListObject;
            }
          }
          if (i[k[1]] == null) {
            objectFormat[k[1]] = '';
          }
        }
      }
      exportInformation.push(objectFormat);
    }

    return exportInformation;
  }
  showDialog() {
    this.dialogVisible = true;
  }
}
