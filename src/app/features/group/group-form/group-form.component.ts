import { Component, OnInit, OnChanges, OnDestroy ,Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Group } from './../group.model';
import { GroupService } from './../group.service';


import { ProgressDialogService } from './../../../_services/progress-dialog.service';
import { ToasterService } from './../../../_services/toaster.service';
import { ErrorHandlerService } from './../../../_services/error-handler.service';
import { MasterDataService } from './../../../_services/master-data.service';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit, OnChanges, OnDestroy {

  @Input() group : Group;
  
    groupId : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
    groupForm : FormGroup;
  
  
    constructor(private _fb : FormBuilder,
                private _service : GroupService,
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
      
      this.groupForm.setValue({
          groupId: this.group.groupId,
          groupName: this.group.groupName
      });
  
      this.groupId.next(this.group.groupId);
  
    }
  
    createForm() {
      
      this.groupForm = this._fb.group({
        groupId      : [0,Validators.required],
        groupName    : [null, Validators.required]
      });
  
    }
  

  
    saveForm() {
      // Get the ID value from the Form
      const id  = this.groupId.value;
      this._loader.openSpinner();
  
      if(id != 0) {
        //Update if the id is not equal to null
        this._service
        .updateData(this.groupForm.value)
        .subscribe((res) => {
           if(res.status == 200){
             this.group = this.groupForm.value;
             this._toaster.showSuccess();
           }
           this._loader.closeSpinner();
        },
        (err) => { this._errHandler.errorHandler(err); this._loader.closeSpinner(); });
        
  
      } else {
  
        //Create or Save New if the id value is null
        this._service
        .saveData(this.groupForm.value)
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
      this.groupForm.reset();
  
      this.groupForm.patchValue({
        itemTypeId : 0
      });
    }
  
    ngOnDestroy(){
      this.groupId.unsubscribe();
    }

}
