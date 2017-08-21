import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';


import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';


import { MdPaginator , MdSort } from '@angular/material';

import { ConfirmationService } from './confirmation.service';

import { Confirmation } from './confirmation.model';


import { TableDataSourceService } from './../../_services/table-data-source.service';
import { TableDatabaseService } from './../../_services/table-database.service';
import { ErrorHandlerService } from './../../_services/error-handler.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit, OnDestroy {

    // Child Elements variables Angular Material 2 Paginator and Sort
  @ViewChild( MdSort ) sort: MdSort;
  @ViewChild( MdPaginator ) paginator: MdPaginator;

  searchFilter : string = ''; // Model for the input of filtering
  latestSearchFilter = new Subject<string>(); // Observable for filtering

  // Table Options
  //Column Definition for the Data Table
  displayedColumns = ['child_name', 'confirmation_date', 'baptism_date' ,'book_no', 'page_no','minister','action'];
  dataSource : TableDataSourceService | null;
  

  //Angular Material 2 Paginator Options
  pageDataLength : number;
  pageSizeOptions : number[] = [5,10,25,50,100];
  pageSize : number = 5;
  pageIndex : number = 0;  
  
  constructor(private _confirmationService : ConfirmationService,private _tableDatabaseService : TableDatabaseService ,private _errHandler : ErrorHandlerService){}

  ngOnInit() {

    this.initData();

    this.dataSource = new TableDataSourceService (this._tableDatabaseService);

    this.latestSearchFilter
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap( search => this._confirmationService.getDataSource(this.paginator,this.sort,search) )
        .subscribe( response => {
            this._tableDatabaseService.tableDataStream$.next(response.data);
        });
  }

  //Load Initial Data 
  initData(){

    //Override Inittial Paginator Default Values
    const initPaginator = {
      pageSize    : this.pageSize,
      pageIndex   : this.pageIndex,
    };

    this._confirmationService.getDataSource(initPaginator,this.sort,this.searchFilter)
        .subscribe( response => {
            this._tableDatabaseService.tableDataStream$.next(response.data);
            this.pageDataLength = response.count;
        });
  }



  //Method that captures the Angular Material 2 Paginator Event and Sort Event
  tableChangeEvent(){

    this.latestSearchFilter.next(this.searchFilter);

  }

  //Track By Method of the Angular Material Data Table
  tableTrackBy = (index : number, item: Confirmation) => {
    return item.confirmation_id;
  }

  //Method in Every new Filter
  newSearchFilter(term) {
    this.latestSearchFilter.next(term);
  }


  
  ngOnDestroy(){
    this.latestSearchFilter.unsubscribe();
  }


}
