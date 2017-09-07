import { Injectable } from '@angular/core';

import * as jsPDF from 'jspdf';
declare let html2pdf;
declare let html2canvas;

@Injectable()
export class PdfService {

  constructor() { }


  generatePDF(): void {
    let pdf = new jsPDF('p', 'pt', 'letter');
    let elem = document.getElementById('print-area');

        

    // var width = 400;
    html2pdf(elem, pdf , function(pdf) {
            let iframe = document.createElement('iframe');
            iframe.setAttribute('style','position:absolute;right:0; top:0; bottom:0; height:100%; width:100%;');
            elem.appendChild(iframe);
            iframe.src = pdf.output('datauristring');

           //var div = document.createElement('pre');
           //div.innerText=pdf.output();
           //document.body.appendChild(div);
        }
    );


  }



}
