import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';


import { ItemPrice } from './../item-price.model';
import { ItemPriceService } from './../item-price.service';


import { ProgressDialogService } from './../../../_services/progress-dialog.service';
import { ErrorHandlerService } from './../../../_services/error-handler.service';

@Component({
  selector: 'app-item-price-editor',
  templateUrl: './item-price-editor.component.html',
  styleUrls: ['./item-price-editor.component.scss']
})
export class ItemPriceEditorComponent implements OnInit {

  itemPrice  : ItemPrice;
  
    constructor(private _route: ActivatedRoute, 
                private _service : ItemPriceService,
                private _loader : ProgressDialogService,
                private _errHandle : ErrorHandlerService ) { }
  
    ngOnInit() {
      this._loader.openSpinner();
      this.initDetails();
    }
  
    
  
  
    initDetails() {
      this._route.paramMap
                 .switchMap((params : ParamMap) => this._service.getData(+params.get('id')))
                 .subscribe((data) => { 
                   this.itemPrice = data;  
  
                   setTimeout(() => { this._loader.closeSpinner(); },0);
                  },
                  (err) => { this._errHandle.errorHandler(err); this._loader.closeSpinner(); });
  
    }

}
