import { Component, OnInit } from '@angular/core';

import { PdfService } from './../../_services/pdf.service';

@Component({
  selector: 'app-invoice-reports',
  templateUrl: './invoice-reports.component.html',
  styleUrls: ['./invoice-reports.component.scss']
})
export class InvoiceReportsComponent implements OnInit {

  number = [];

  constructor(private _pdf : PdfService) { }

  ngOnInit() {
    this.createArray();
    this.initPdf();
  }

  createArray(){
    let arrMax = 100;
    for(let x = 0; x<arrMax;x++){

      this.number.push(x);
    }

  }

  initPdf(){
    setTimeout(() => {
      this._pdf.generatePDF();
    },500);
  }




}
