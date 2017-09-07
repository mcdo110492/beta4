import { Component, OnInit, OnChanges, OnDestroy ,Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ItemType } from './../item-type.model';
import { ItemTypeService } from './../item-type.service';


import { ProgressDialogService } from './../../../_services/progress-dialog.service';
import { ToasterService } from './../../../_services/toaster.service';
import { ErrorHandlerService } from './../../../_services/error-handler.service';
import { MasterDataService } from './../../../_services/master-data.service';

@Component({
  selector: 'app-item-type-form',
  templateUrl: './item-type-form.component.html',
  styleUrls: ['./item-type-form.component.scss']
})
export class ItemTypeFormComponent implements OnInit, OnChanges, OnDestroy {

  @Input() itemType : ItemType;
  
    itemTypeId : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
    startDate   : Date = new Date();
    itemTypeForm : FormGroup;
  
  
    constructor(private _fb : FormBuilder,
                private _service : ItemTypeService,
                private _master : MasterDataService,
                private _toaster : ToasterService,
                private _errHandler : ErrorHandlerService,
                private _loader : ProgressDialogService
                ) {
                  this.createForm();
                 }
  
    ngOnInit() {
      
    }
  
  
  
    ngOnChanges() {
      
      this.itemTypeForm.setValue({
          itemTypeId: this.itemType.itemTypeId,
          itemName: this.itemType.itemName
      });
  
      this.itemTypeId.next(this.itemType.itemTypeId);
  
    }
  
    createForm() {
      
      this.itemTypeForm = this._fb.group({
        itemTypeId      : [0,Validators.required],
        itemName        : [null, Validators.required]
      });
  
    }
  

  
    saveForm() {
      // Get the ID value from the Form
      const id  = this.itemTypeId.value;
      this._loader.openSpinner();
  
      if(id != 0) {
        //Update if the id is not equal to null
        this._service
        .updateData(this.itemTypeForm.value)
        .subscribe((res) => {
           if(res.status == 200){
             this.itemType = this.itemTypeForm.value;
             this._toaster.showSuccess();
           }
           this._loader.closeSpinner();
        },
        (err) => { this._errHandler.errorHandler(err); this._loader.closeSpinner(); });
        
  
      } else {
  
        //Create or Save New if the id value is null
        this._service
        .saveData(this.itemTypeForm.value)
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
      this.itemTypeForm.reset();
  
      this.itemTypeForm.patchValue({
        itemTypeId : 0
      });
    }
  
    ngOnDestroy(){
      this.itemTypeId.unsubscribe();
    }

}
