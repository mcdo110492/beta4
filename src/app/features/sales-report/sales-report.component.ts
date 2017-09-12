import { Component, OnInit } from '@angular/core';

import { SalesIndividual, SalesByCategory } from './sales-report.model';

import { SalesReportService } from './sales-report.service';

import { ProgressDialogService } from './../../_services/progress-dialog.service';
import { ErrorHandlerService } from './../../_services/error-handler.service';

import * as moment from "moment";

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss']
})
export class SalesReportComponent implements OnInit {

  salesIndividual : SalesIndividual[];
  salesCategories : SalesByCategory[];
  totalSales : number = 0;

  constructor(private _service : SalesReportService,
              private _errorHandler : ErrorHandlerService,
              private _loader : ProgressDialogService) { }

  ngOnInit() {
  }

  reportEventFn(data : any){
      this._loader.openSpinner();
      let from = moment(data.from).format('YYYY-MM-D');
      let to   = moment(data.to).format('YYYY-MM-D');
      let type = data.type;
      if(type === 'byIndividual'){
        this._service.getDataIndividual(from,to,type)
        .subscribe( (response) => {
         this.salesIndividual = response.data; 
         this.totalSales = response.totalSales;
         this._loader.closeSpinner();
        },(err) => { this._errorHandler.errorHandler(err); this._loader.closeSpinner(); });
      }
      else{
        this._service.getDataCategory(from,to,type)
        .subscribe( (response) => {
         this.salesCategories = response.data; 
         this.totalSales = response.totalSales;
         this._loader.closeSpinner();
        },(err) => { this._errorHandler.errorHandler(err); this._loader.closeSpinner(); });
      }

  }

}
