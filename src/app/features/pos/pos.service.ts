import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment.prod';

import { GroupItem } from './../group/group-item/group-item.model';

interface IStatusResponse {
  status : number;
  message : string;
}

interface ICollectionResponse {
  collection : number;
}

@Injectable()
export class PosService {

  baseUrl : string = environment.target;

  constructor(private _http : HttpClient) { }

  getItems(filter : string){

    const params = new HttpParams()
          .set('filter', filter);

        return this._http.get<GroupItem[]>(`${this.baseUrl}/item/group/price`,{ params : params });
  }

  getTotalCollection(){

    return this._http.get<ICollectionResponse>(`${this.baseUrl}/invoice/collection`);

  }

  storeItems(data){
    
    return this._http.post<IStatusResponse>(`${this.baseUrl}/invoice`,data);

  }

}
