import { Component, OnInit, OnDestroy ,ViewChild } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';


import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

import { MdPaginator , MdSort } from '@angular/material';

import { ItemType } from './../../item-type/item-type.model';

import { GroupItemService } from './../group-item.service';

import { TableDataSourceService } from './../../../_services/table-data-source.service';
import { TableDatabaseService } from './../../../_services/table-database.service';
import { ProgressDialogService } from './../../../_services/progress-dialog.service'; 
import { ConfirmDialogService } from './../../../_services/confirm-dialog.service'; 
import { ErrorHandlerService } from './../../../_services/error-handler.service';
import { ToasterService } from './../../../_services/toaster.service';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss']
})
export class GroupItemComponent implements OnInit, OnDestroy {

   // Child Elements variables Angular Material 2 Paginator and Sort
   @ViewChild( MdSort ) sort: MdSort;
   @ViewChild( MdPaginator ) paginator: MdPaginator;
 
 
   groupId : number;
   groupName : string;
 
   searchFilter : string = '';
   latestSearchFilter = new Subject<string>();
 
   // Table Options
   displayedColumns = ['itemName','itemPrice','action'];
   dataSource : TableDataSourceService | null;
   
 
   //Angular Material 2 Paginator Options
   pageDataLength : number;
   pageSizeOptions : number[] = [5,10,25,50,100];
   pageSize : number = 5;
   pageIndex : number = 0;  
   
   constructor(private _route: ActivatedRoute,
               private _groupService : GroupItemService,
               private _tableDatabaseService : TableDatabaseService ,
               private _errHandler : ErrorHandlerService, 
               private _loader : ProgressDialogService,
               private _toaster : ToasterService,
               private _confirm : ConfirmDialogService){}
 
   ngOnInit() {

     
    this._route.paramMap
               .switchMap( (params : ParamMap) => 
                this._groupService.getDataSource({pageSize : this.pageSize, pageIndex : this.pageIndex},this.sort,this.searchFilter,+params.get('id'))
               ) 
              .subscribe( response => {
                this._tableDatabaseService.tableDataStream$.next(response.data);
                this.pageDataLength = response.count;
                
                },
                (err) => { this._errHandler.errorHandler(err); this._loader.closeSpinner(); },
                () => this._loader.closeSpinner()
              );

     this.groupId = +this._route.snapshot.paramMap.get('id');
     this.groupName = this._route.snapshot.paramMap.get('name');
     
     this.dataSource = new TableDataSourceService (this._tableDatabaseService);
 
     this.latestSearchFilter
         .debounceTime(300)
         .switchMap( search => this._groupService.getDataSource(this.paginator,this.sort,search,this.groupId) )
         .subscribe( response => {
             this.pageDataLength = response.count;
             this._tableDatabaseService.tableDataStream$.next(response.data);
         },
         (err) => this._errHandler.errorHandler(err)
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

   delete(id : number){
      //Confirmation Dialog that will emit a boolean
      this._confirm.openConfirm('Click proceed if you want to remove this item! Click No if you want to cancel this transaction.')
          .subscribe((res) => {
            //Subscribe to the dialog that emit a stream of boolean
            if(res){//If the proceed button is click the removal item will be passed to the backend for process
              this._loader.openSpinner();
              this._groupService
              .removeData(id)
              .subscribe( (res) =>{
                this._toaster.showCustom('info','Item Remove Success','Item has been remove from this group.');
                this._loader.closeSpinner();
                this.tableChangeEvent();
              },
              (err) => {
                this._errHandler.errorHandler(err);
                this._loader.closeSpinner();
              });
            }
          });
      
   }
 
 
 
   
   ngOnDestroy(){
     this.latestSearchFilter.unsubscribe();
   }

}
