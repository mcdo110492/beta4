import { Component, OnInit, OnChanges, OnDestroy ,Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ItemPrice } from './../item-price.model';
import { ItemType } from './../../item-type/item-type.model';
import { ItemPriceService } from './../item-price.service';


import { ProgressDialogService } from './../../../_services/progress-dialog.service';
import { ToasterService } from './../../../_services/toaster.service';
import { ErrorHandlerService } from './../../../_services/error-handler.service';
import { MasterDataService } from './../../../_services/master-data.service';

@Component({
  selector: 'app-item-price-form',
  templateUrl: './item-price-form.component.html',
  styleUrls: ['./item-price-form.component.scss']
})
export class ItemPriceFormComponent implements OnInit, OnChanges,OnDestroy {

  @Input() itemPrice : ItemPrice;
  
    itemPriceId : BehaviorSubject<number> = new BehaviorSubject<number>(0);

    itemType : ItemType[];

    itemPriceForm : FormGroup;
  
  
    constructor(private _fb : FormBuilder,
                private _service : ItemPriceService,
                private _master : MasterDataService,
                private _toaster : ToasterService,
                private _errHandler : ErrorHandlerService,
                private _loader : ProgressDialogService
                ) {
                  this.createForm();
                 }
  
    ngOnInit() {
      this.initMasterData();
    }
  
  
  
    ngOnChanges() {
      
      this.itemPriceForm.setValue({
          itemPriceId : this.itemPrice.itemPriceId,
          itemTypeId  : this.itemPrice.itemTypeId,
          itemPrice   : this.itemPrice.itemPrice
      });
      
      this.itemPriceId.next(this.itemPrice.itemPriceId);
  
    }
  
    createForm() {
      
      this.itemPriceForm = this._fb.group({
        itemPriceId      : [0,Validators.required],
        itemTypeId       : [null,Validators.required],
        itemPrice        : [null,Validators.required]
      });
  
    }

    initMasterData(){
      this._master.getItemType()
                  .subscribe( (res) => {
                    this.itemType = res.data;
                  },
                  (err) => this._errHandler.errorHandler(err) );
    }
  

  
    saveForm() {
      // Get the ID value from the Form
      const id  = this.itemPriceId.value;
      this._loader.openSpinner();
  
      if(id != 0) {
        //Update if the id is not equal to null
        this._service
        .updateData(this.itemPriceForm.value)
        .subscribe((res) => {
           if(res.status == 200){
             this.itemPrice = this.itemPriceForm.value;
             this._toaster.showSuccess();
           }
           this._loader.closeSpinner();
        },
        (err) => { this._errHandler.errorHandler(err); this._loader.closeSpinner(); });
        
  
      } else {
  
        //Create or Save New if the id value is null
        this._service
        .saveData(this.itemPriceForm.value)
        .subscribe((res) => {
          if(res.status == 200){
            this.resetForm();
            this._toaster.showSuccess();
          }
  
          this._loader.closeSpinner();
        },
        (err) => {
          this._errHandler.errorHandler(err); this._loader.closeSpinner();
        });
      
      }
      
    }
  
    revertForm() {
      this.ngOnChanges();
    }
  
    resetForm(){
      this.itemPriceForm.reset();
  
      this.itemPriceForm.patchValue({
        itemPriceId : 0
      });
    }
  
    ngOnDestroy(){
      this.itemPriceId.unsubscribe();
    }

}
