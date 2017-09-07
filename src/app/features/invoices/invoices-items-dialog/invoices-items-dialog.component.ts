import { Component, OnInit, Inject } from '@angular/core';

import { DataSource } from '@angular/cdk';
import { MD_DIALOG_DATA } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


import { InvoiceItems } from './../invoices.model';


@Component({
  selector: 'app-invoices-items-dialog',
  templateUrl: './invoices-items-dialog.component.html',
  styleUrls: ['./invoices-items-dialog.component.scss']
})
export class InvoicesItemsDialogComponent implements OnInit {
  
  displayedColumns = ['itemName','currentPrice','qty','total'];
  invoiceDatabase = new InvoiceDatabase();
  dataSource : InvoiceTableDataSource | null;

  constructor(@Inject(MD_DIALOG_DATA) public data : dataItems){}

  ngOnInit() {
    
      this.invoiceDatabase.dataChange.next(this.data.items);
      this.dataSource = new  InvoiceTableDataSource(this.invoiceDatabase);
 
  }

  getTotal(qty : number , price : number){
    const total = (+price * +qty);
    return total;
  }


}

interface dataItems {
  items : InvoiceItems[];
  rrNo : number;
  total: number;
}

export class InvoiceDatabase {

  dataChange : BehaviorSubject<InvoiceItems[]> = new BehaviorSubject<InvoiceItems[]>([]);
  get data () : InvoiceItems[]{ return this.dataChange.value };

}



export class InvoiceTableDataSource extends DataSource<any>{

    constructor(private _database : InvoiceDatabase){
      super();
    }

    connect() : Observable<InvoiceItems[]> {
      return this._database.dataChange;
    }

    disconnect() {
      this._database.dataChange.unsubscribe();
    }

}


