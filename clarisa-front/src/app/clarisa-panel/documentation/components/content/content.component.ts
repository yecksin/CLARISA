import { Component, Input, OnInit } from '@angular/core';
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
  @Input() informationTable: any;
  arrayColumns = [];
  keysTable = [];
  constructor(private _manageApiService: EndpointsInformationService) {}

  ngOnInit(): void {
    console.log(this.information);
  }

  iniciativeEndInformation(): void {
    this.arrayColumns = [];
    let contain = JSON.parse(this.information.response_json);
    for (let i in contain.properties) {
      if (contain.properties[i].show_in_table == true) {
        this.arrayColumns[contain.properties[i].order] =
          contain.properties[i].column_name;
        this.keysTable[contain.properties[i].order] = i;
      }
    }
    console.log(this.informationTable);
  }

  convertJson() {
    let request_json = JSON.parse(this.information.response_json);
    let json_reponse = ' {\n';
    for (var clave in request_json.properties) {
      if (request_json.properties[clave].object_type == 'field') {
        json_reponse +=
          '\t"' +
          clave +
          ' " ' +
          ': "' +
          request_json.properties[clave].type +
          '"' +
          ',\n';
      }
      if (request_json.properties[clave].object_type == 'object') {
        json_reponse += '\t"' + clave + '": {' + '\n';
        for (var subclave in request_json.properties[clave].properties) {
          json_reponse +=
            '\t\t"' +
            subclave +
            '"' +
            ': "' +
            request_json.properties[clave].properties[subclave].type +
            '"' +
            ',\n';
        }
        json_reponse += '\t}\n';
      }
    }
    json_reponse += '}';

    return json_reponse;
  }

  customSort(event: SortEvent | any) {
    event.data.sort((data1: any, data2: any) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
    });
  }
  exportPdf() {
    let information = [];
    let d = new Date();
    for (let k of this.informationTable) {
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
        this.information.name +
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
      const worksheet = xlsx.utils.json_to_sheet(this.informationTable);
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
        this.information.name +
        d.getFullYear() +
        (d.getMonth() + 1) +
        d.getDate() +
        d.getHours() +
        d.getMinutes() +
        EXCEL_EXTENSION
    );
  }
}
