import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';


import { GroupItem } from './../../group/group-item/group-item.model';
import { PosService } from './../pos.service';


import { ErrorHandlerService } from './../../../_services/error-handler.service';

@Component({
  selector: 'app-pos-search',
  templateUrl: './pos-search.component.html',
  styleUrls: ['./pos-search.component.scss']
})
export class PosSearchComponent implements OnInit, OnDestroy {

  @Output() selectedItem = new EventEmitter<GroupItem>();

  items : GroupItem[];
  searchFilter : string;
  latestSearchFilter = new Subject<string>();
  isLoader   : boolean = false;

  constructor(private _service : PosService,
              private _errHandler : ErrorHandlerService) { }

  ngOnInit() {
    this.latestSearchFilter
        .do(() => this.isLoader = true)
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap( search => this._service.getItems(search) )
        .subscribe( response => {
          this.isLoader = false;
          this.items = response;
        },
        (err) => { this._errHandler.errorHandler(err); this.isLoader = false; });
  }

  itemSearch(filter){
    this.latestSearchFilter.next(filter); 
  }

  displayItem() : string {
    return  '' ;
  }

  selectedItemFn(item : GroupItem){
    this.selectedItem.emit(item);
  }

  ngOnDestroy(){
    this.latestSearchFilter.unsubscribe();
  }

}
