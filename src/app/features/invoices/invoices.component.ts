import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

import { MdPaginator, MdSort } from '@angular/material';

import * as moment from "moment";

import { InvoicesService } from './invoices.service';

import { TableDataSourceService } from './../../_services/table-data-source.service';
import { TableDatabaseService } from './../../_services/table-database.service';
import { ProgressDialogService } from './../../_services/progress-dialog.service'; 
import { ErrorHandlerService } from './../../_services/error-handler.service';
import { ToasterService } from './../../_services/toaster.service';



@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit, OnDestroy {

  // Child Elements variables Angular Material 2 Paginator and Sort
  @ViewChild( MdSort ) sort: MdSort;
  @ViewChild( MdPaginator ) paginator: MdPaginator;

  searchFilter : string = '';
  latestSearchFilter = new Subject<string>();
  currentDate  = new Date();
  dateFilter   : Date = this.currentDate;

  // Table Options
  displayedColumns = ['rrNo','amountPaid','customer','user','status','items'];
  dataSource : TableDataSourceService | null;
  

  //Angular Material 2 Paginator Options
  pageDataLength : number = 0;
  pageSizeOptions : number[] = [5,10,25,50,100];
  pageSize : number = 5;
  pageIndex : number = 0;  
  
  constructor(private _services : InvoicesService,
              private _tableDatabaseService : TableDatabaseService ,
              private _errHandler : ErrorHandlerService, 
              private _loader : ProgressDialogService,
              private _toaster : ToasterService){}

  ngOnInit() {
                
    this.dataSource = new TableDataSourceService (this._tableDatabaseService);
    
    this.initData();

    this.latestSearchFilter
        .debounceTime(300)
        .switchMap( search => this._services.getDataSource(this.paginator,this.sort,search,moment(this.dateFilter).format('MMMM Do YYYY')) )
        .subscribe( response => {
            this.pageDataLength = response.count;
            this._tableDatabaseService.tableDataStream$.next(response.data);
        },(err) => this._errHandler.errorHandler(err));
  }

  initData(){
      this._loader.openSpinner();
    //Override Inittial Paginator Default Values
        const initPaginator = {
          pageSize    : this.pageSize,
          pageIndex   : this.pageIndex,
        };
        
    
         this._services.getDataSource(initPaginator,this.sort,this.searchFilter,moment(this.dateFilter).format('MMMM Do YYYY'))
            .subscribe( response => {
                this._tableDatabaseService.tableDataStream$.next(response.data);
                this.pageDataLength = response.count;
                this._loader.closeSpinner();
            },
            (err) => { this._errHandler.errorHandler(err); this._loader.closeSpinner(); }
          );
  
    
    }

   //Method that captures the Angular Material 2 Paginator Event and Sort Event
  tableChangeEvent(){  
    this.latestSearchFilter.next(this.searchFilter);
  }
    
  //Method in Every new Filter
  newSearchFilter(term) {
    this.latestSearchFilter.next(term);
  }

  changeStatus(id : number , status : number){
    this._loader.openSpinner();
    this._services.changeStatus(id,status)
                  .subscribe((res) => {
                    if(res.status == 200){
                      this._toaster.showCustom('success','Status Changed','The status has been changed successfully');
                      this.tableChangeEvent();
                    }
                    this._loader.closeSpinner();
                  },(err) => { this._errHandler.errorHandler(err); this._loader.closeSpinner(); });

  }

  viewItems(id : number, rrNo : number){
    this._services.getItems(id)
        .subscribe((result) => {
            this._services.openItemsDialog(result.data,rrNo,result.total);
        },(err) => { this._errHandler.errorHandler(err); });
  }

      
  ngOnDestroy(){
    this.latestSearchFilter.unsubscribe();
  }

}
