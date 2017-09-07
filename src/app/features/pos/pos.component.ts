import { Component, OnInit } from '@angular/core';

import { GroupItem } from './../group/group-item/group-item.model';

import { PosService } from './pos.service';

import { ToasterService } from './../../_services/toaster.service';
import { ErrorHandlerService } from './../../_services/error-handler.service';
import { ProgressDialogService } from './../../_services/progress-dialog.service';


@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {
  
  selectedItems : GroupItem[] = [];
  totalItems : number = 0;
  totalPrice : number = 0;
  cash       : number = 0;
  cashChange : number = 0;
  totalCollection : number = 0;
  

  constructor(private _errHandler : ErrorHandlerService,
              private _toaster : ToasterService,
              private _loader : ProgressDialogService,
              private _service : PosService) { }

  ngOnInit() {
    this.totalCollectionFn();
  }

  addQty(index : number){
    this.selectedItems[index].qty = this.selectedItems[index].qty + 1;
    this.totalItems += 1;
    this.totalPrice += +this.selectedItems[index].itemPrice;
    this.cashChange -= (this.cash) ? +this.selectedItems[index].itemPrice : 0;
  }

  subtractQty(index : number){

    if(this.selectedItems[index].qty > 1){
      this.selectedItems[index].qty = this.selectedItems[index].qty - 1;
      this.totalItems -= 1;
      this.totalPrice -= +this.selectedItems[index].itemPrice;
      this.cashChange -= (this.cash) ? +this.selectedItems[index].itemPrice : 0;
    }
    else{
      this._toaster.showCustom('info','Minimum Quantity','Item must have a minimum quantity of 1.');
    }
    
  }

  removeItem(index : number, item : GroupItem){
    this.totalItems -= +this.selectedItems[index].qty;
    this.totalPrice -= (+this.selectedItems[index].itemPrice * +this.selectedItems[index].qty);
    this.cashChange += (this.cash) ? (+this.selectedItems[index].itemPrice * +this.selectedItems[index].qty) : 0;
    this.selectedItems.splice(index,1);
  }

  selectedItemFn(item : GroupItem){

    const isExist = this.selectedItems.findIndex( i => i.item_price == item.item_price );
    
    if(isExist == -1){
      item.qty = 1;
      this.selectedItems.push(item);
      this.totalItems += 1;
      this.totalPrice += +item.itemPrice;
    }
    else{
      this.selectedItems[isExist].qty = this.selectedItems[isExist].qty + 1;
      this.totalItems += 1;
      this.totalPrice += +item.itemPrice;
    }
  }

  logCashFn(cash : number){
    this.cash = +cash;
    this.cashChange = (cash) ? this.cash - this.totalPrice : 0;
  }

  saveProgressFn(progress : boolean){

    if(progress){
      this.totalCollection += this.totalPrice;
      this.selectedItems = [];
      this.totalItems    = 0;
      this.totalPrice    = 0;
      this.cash          = 0;
      this.cashChange    = 0;
    }
    
  }

  totalCollectionFn(){
    this._service.getTotalCollection()
                  .subscribe((result) => {
                      this.totalCollection = +result.collection;
                  });
  }



}
