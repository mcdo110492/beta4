import { Injectable } from '@angular/core';

// import * as jsPDF from 'jspdf';
declare let html2pdf;
declare var jsPDF : any;

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

  generatePdfByAutotable(title : string,subtitle : string){
    let doc = new jsPDF();
        doc.setFontSize(20);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
        doc.text(title,14,16);
        doc.setFontSize(10);
        doc.text(subtitle,14,22);
    let elem = document.getElementById('basic-table');
    let res = doc.autoTableHtmlToJson(elem);
        doc.autoTable(res.columns,res.data,{startY: 25});

        let iframe = document.createElement('iframe');
        iframe.setAttribute('style','position:relative;right:0; top:0; bottom:0; height:100%; width:100%;');
        let childElem = document.getElementById('print-area').childNodes[0];
        document.getElementById('print-area').replaceChild(iframe,childElem);
        iframe.src = doc.output('datauristring');

  }



}
