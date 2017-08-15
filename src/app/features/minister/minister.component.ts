import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';


import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';


import { MdPaginator , MdSort } from '@angular/material';

import { MinisterService } from './minister.service';

import { Minister } from './minister.model';


import { TableDataSourceService } from './../../_services/table-data-source.service';
import { TableDatabaseService } from './../../_services/table-database.service';
import { ErrorHandlerService } from './../../_services/error-handler.service';

@Component({
  selector: 'app-minister',
  templateUrl: './minister.component.html'
})
export class MinisterComponent implements OnInit, OnDestroy {

  // Child Elements variables Angular Material 2 Paginator and Sort
  @ViewChild( MdSort ) sort: MdSort;
  @ViewChild( MdPaginator ) paginator: MdPaginator;

  searchFilter : string = '';
  latestSearchFilter = new Subject<string>();

  // Table Options
  displayedColumns = ['minister_name', 'minister_id'];
  dataSource : TableDataSourceService | null;
  

  //Angular Material 2 Paginator Options
  pageDataLength : number;
  pageSizeOptions : number[] = [5,10,25,50,100];
  pageSize : number = 5;
  pageIndex : number = 0;  
  
  constructor(private _ministerService : MinisterService,private _tableDatabaseService : TableDatabaseService ,private _errHandler : ErrorHandlerService){}

  ngOnInit() {

    this.initData();

    this.dataSource = new TableDataSourceService (this._tableDatabaseService);

    this.latestSearchFilter
        .debounceTime(300)
        .switchMap( search => this._ministerService.getDataSource(this.paginator,this.sort,search) )
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

    this._ministerService.getDataSource(initPaginator,this.sort,this.searchFilter)
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
  tableTrackBy = (index : number, item: Minister) => {
    return item.minister_id;
  }

  //Method in Every new Filter
  newSearchFilter(term) {
    this.latestSearchFilter.next(term);
  }


  
  ngOnDestroy(){
    this.latestSearchFilter.unsubscribe();
  }

}
