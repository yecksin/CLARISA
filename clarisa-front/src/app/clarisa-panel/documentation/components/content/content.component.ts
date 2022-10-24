import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EndpointsInformationService } from '../../services/endpoints-information.service';
import { PrimeNGConfig, SortEvent } from 'primeng/api';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as FileSaver from 'file-saver';
import { Table } from 'primeng/table';

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

  rows = 10;
  constructor(private _manageApiService: EndpointsInformationService) {}

  ngOnInit(): void {
    console.log(this.information);
  }

  ngOnChanges(paramsUrl: SimpleChanges) {
    console.log(paramsUrl['urlParams'].currentValue.namesubcategory);

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
    let information = [];
    let d = new Date();
    for (let k of this.informationEndpoint) {
      information.push(Object.values(k));
    }
    const doc = new jsPDF();
    autoTable(doc, {
      head: [this.arrayColumns],
      body: information,
      didDrawPage: (dataArg) => {
        doc.text('PAGE', dataArg.settings.margin.left, 10);
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
      const worksheet = xlsx.utils.json_to_sheet(this.informationEndpoint);
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
}
