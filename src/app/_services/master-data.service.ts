import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment.prod';

import { Minister } from './../features/minister/minister.model';

import { ItemType } from './../features/item-type/item-type.model';

import { ItemPrice } from './../features/item-price/item-price.model';


interface IMinisterDataResponse {
  data : Minister[]
}

interface IItemTypeDataResponse {
  data : ItemType[]
}

interface IITemPriceDataResponse {
  data : ItemPrice[]
}

@Injectable()
export class MasterDataService {

  baseUrl: string = environment.target;

  constructor(private _http : HttpClient) { }

  getMinisters() {
    return this._http
                    .get<IMinisterDataResponse>(`${this.baseUrl}/minister/all`);
  }

  getActiveMinister() {
    return this._http
                    .get<IMinisterDataResponse>(`${this.baseUrl}/minister/active`);
  }

  getItemType() {
    return this._http
                    .get<IItemTypeDataResponse>(`${this.baseUrl}/item/type/all`);
  }

  getItemPrice(){
    return this._http
                    .get<IITemPriceDataResponse>(`${this.baseUrl}/item/price/all`);
  }

}
