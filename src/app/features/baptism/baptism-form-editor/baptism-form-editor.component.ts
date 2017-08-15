import { Component, OnInit, OnChanges } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Baptism } from './../baptism.model';
import { BaptismService } from './../baptism.service';

import { Minister } from './../../minister/minister.model';

import 'rxjs/add/operator/switchMap';

import { ProgressDialogService } from './../../../_services/progress-dialog.service';
import { ToasterService } from './../../../_services/toaster.service';
import { ErrorHandlerService } from './../../../_services/error-handler.service';
import { MasterDataService } from './../../../_services/master-data.service';


@Component({
  selector: 'app-baptism-form-editor',
  templateUrl: './baptism-form-editor.component.html',
  styleUrls: ['./baptism-form-editor.component.scss']
})
export class BaptismFormEditorComponent implements OnInit, OnChanges {

  baptismForm : FormGroup;
  startDate   : Date = new Date();
  baptism     : Baptism;
  ministers   : Minister[];

  constructor(private _route: ActivatedRoute, 
              private _fb : FormBuilder,
              private _service : BaptismService,
              private _loader : ProgressDialogService,
              private _toater : ToasterService,
              private _errHandle : ErrorHandlerService,
              private _masterService : MasterDataService ) { }

  ngOnInit() {
    this._loader.openSpinner();
    this.initDetails();
    this.createForm();
  }

  ngOnChanges() {
    this.baptismForm.setValue({
        baptism_id: this.baptism.baptism_id,
        child_name: this.baptism.child_name,
        father_name: this.baptism.father_name,
        mother_name: this.baptism.mother_name,
        birth_place : this.baptism.birth_place,
        birthday: new Date(this.baptism.birthday),
        baptism_date : new Date(this.baptism.baptism_date),
        book_no : this.baptism.book_no,
        page_no : this.baptism.page_no,
        entry_no : this.baptism.entry_no,
        sponsors : this.baptism.sponsors,
        remarks: this.baptism.remarks,
        minister_id : this.baptism.minister_id
    });
  }



  initDetails() {
    this._route.paramMap
               .switchMap((params : ParamMap) => this._service.getData(+params.get('id')))
               .subscribe((data) => { 
                 this.baptism = data;  
                
                 this.ngOnChanges();

                 setTimeout(() => { this._loader.closeSpinner(); },0);
                },
                (err) => { this._errHandle.errorHandler(err); this._loader.closeSpinner(); });
    
    this._masterService
                    .getMinisters()
                    .subscribe( (res) => {
                      this.ministers = res.data
                    },
                   (err) => { this._errHandle.errorHandler(err); });
  }

  createForm() {
    
    this.baptismForm = this._fb.group({
      baptism_id      : ['',Validators.required],
      child_name      : ['', Validators.required],
      father_name     : ['', Validators.required],
      mother_name     : ['', Validators.required],
      birth_place     : [''],
      birthday        : [''],
      baptism_date    : ['',Validators.required],
      book_no         : ['',[Validators.required,Validators.min(1)]],
      page_no         : ['',[Validators.required,Validators.min(1)]],
      entry_no        : ['',[Validators.required,Validators.min(1)]],
      sponsors        : ['',[Validators.maxLength(200)]],
      remarks         : ['',[Validators.maxLength(200)]],
      minister_id     : ['',Validators.required]
    });
  }

  saveForm() {
    this._loader.openSpinner();
    this._service
                 .updateData(this.baptismForm.value)
                 .subscribe((res) => {
                    if(res.status == 200){
                      this.baptism = this.baptismForm.value;
                      this._toater.showSuccess();
                    }
                    this._loader.closeSpinner();
                 },
                 (err) => { this._errHandle.errorHandler(err); this._loader.closeSpinner(); })
  }

  revertForm() {
    this.ngOnChanges();
  }

}
