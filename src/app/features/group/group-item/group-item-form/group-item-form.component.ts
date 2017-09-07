import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { GroupItem } from './../group-item.model';
import { ItemPrice } from './../../../item-price/item-price.model';
import { GroupItemService } from './../../group-item.service';


import { ProgressDialogService } from './../../../../_services/progress-dialog.service';
import { ToasterService } from './../../../../_services/toaster.service';
import { ErrorHandlerService } from './../../../../_services/error-handler.service';
import { MasterDataService } from './../../../../_services/master-data.service';

@Component({
  selector: 'app-group-item-form',
  templateUrl: './group-item-form.component.html',
  styleUrls: ['./group-item-form.component.scss']
})
export class GroupItemFormComponent implements OnInit {

      @Output() save = new EventEmitter<boolean>();

      groupId   : number;
      itemPrice : ItemPrice[];
      itemGroupForm : FormGroup;
    
    
      constructor(private _route: ActivatedRoute,
                  private _fb : FormBuilder,
                  private _service : GroupItemService,
                  private _master : MasterDataService,
                  private _toaster : ToasterService,
                  private _errHandler : ErrorHandlerService,
                  private _loader : ProgressDialogService
                  ) {
                    this.createForm();
                   }
    
      ngOnInit() {
        this.initMasterData();
        this.groupId = +this._route.snapshot.paramMap.get('id');

        this.itemGroupForm.patchValue({
          groupId   : this.groupId
        });
      }
    
    

    
      createForm() {
        
        this.itemGroupForm = this._fb.group({
          itemGroupId      : [0,Validators.required],
          itemPriceId      : [null,Validators.required],
          groupId           : [null,Validators.required]
        });
    
      }
  
      initMasterData(){
        this._master.getItemPrice()
                    .subscribe( (res) => {
                      this.itemPrice = res.data;
                    },
                    (err) => this._errHandler.errorHandler(err) );
      }
    
  
    
      saveForm() {
     
        this._loader.openSpinner();
    
       
          this._service
          .save(this.itemGroupForm.value)
          .subscribe((res) => {
            if(res.status == 200){
              this.resetForm();
              this._toaster.showSuccess();
              this.save.emit(true);
            }
    
            this._loader.closeSpinner();
          },
          (err) => {
            this.save.emit(false);
            this._errHandler.errorHandler(err); this._loader.closeSpinner();
          });
        
        
        
      }
    

      resetForm(){
        this.itemGroupForm.reset();
        this.itemGroupForm.setValue({
          itemGroupId : null,
          itemPriceId : null,
          groupId     : this.groupId
        });
      }
    
   

}
