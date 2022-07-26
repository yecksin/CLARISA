import * as Excel from 'exceljs';

export class ExcelUtil {
  workbook = new Excel.Workbook();
  fileWB: Excel.Workbook;
  filePath: string;
  headers: string[];

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  // get excel sheet by name

  async readWorkSheet(sheetName: string): Promise<Excel.Worksheet> {
    this.fileWB = await this.workbook.xlsx.readFile(this.filePath);
    const worksheet = this.fileWB.getWorksheet(sheetName);
    this.headers = this.getHeaders(worksheet);

    return worksheet;
  }

  // get excel headers
  private getHeaders(worksheet, index = 1) {
    const result: string[] = [];

    const row = worksheet.getRow(index);

    if (row === null || !row.values || !row.values.length) return [];

    for (let i = 1; i < row.values.length; i++) {
      const cell = row.getCell(i);
      result.push(cell.text);
    }
    return result;
  }

  // get cell in row by header
  public getCellInRowByColumnHeader(
    worksheet: Excel.Worksheet,
    rowNumber: number,
    header: string,
  ) {
    const row = worksheet.getRow(rowNumber);
    let result: Excel.Cell | undefined;
    const self = this;
    row.eachCell(function (cell: Excel.Cell, colNumber: number) {
      const fetchedHeader: string = self.headers[colNumber - 1];
      if (fetchedHeader.toLowerCase().trim() === header.toLowerCase().trim()) {
        result = cell;
      }
    });
    return result;
  }
}
