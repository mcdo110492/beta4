import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { Invoices, InvoiceItems } from './invoices.model';
import { InvoicesItemsDialogComponent } from './invoices-items-dialog/invoices-items-dialog.component';

import { environment } from './../../../environments/environment.prod';


interface  IDataResponse {
  count : number;
  data  : Invoices[];
}

interface IInvoiceItemResponse {
  data : InvoiceItems[];
  total : number;
}

interface IStatusResponse {
  status  : number;
  message : string;
}

@Injectable()
export class InvoicesService {

  baseUrl: string = environment.target;
  
    constructor(private http : HttpClient, private _dialog : MdDialog) {}
  
    getDataSource(paginator,sort,filter, dateIssued) {
          const data = {
            filter : filter,
            limit : paginator.pageSize,
            page : paginator.pageIndex,
            order : sort.direction || 'asc',
            field : sort.active || 'rrNo',
            dateIssued : dateIssued
          }
  
        return this.http
                      .post<IDataResponse>(`${this.baseUrl}/invoices`,data);
  
    }


    changeStatus(id :number , status : number){
      const data = {
            invoiceId : id,
            status    : status
      };

      return this.http
                     .post<IStatusResponse>(`${this.baseUrl}/invoices/status`,data);
    }

    getItems(id : number){

      return this.http  
                      .get<IInvoiceItemResponse>(`${this.baseUrl}/invoices/items/${id}`);

    }

    openItemsDialog(data : InvoiceItems[],rrNo : number,total : number){

     let dialogRef : MdDialogRef<InvoicesItemsDialogComponent>;

     let dialogConfig : MdDialogConfig = {
        disableClose : false,
        height: '400px',
        width: '600px',
        data: {
          items : data,
          rrNo  : rrNo,
          total : total
        }
      };

      dialogRef = this._dialog.open(InvoicesItemsDialogComponent,dialogConfig);

      return dialogRef.afterClosed();
 

    }

}
