import { Injectable } from '@angular/core';

import { ItemPrice } from './item-price.model';

import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment.prod';


interface  IDataResponse {
  count : number;
  data  : ItemPrice[];
}


interface IStatusResponse {
  status  : number;
  message : string;
}

@Injectable()
export class ItemPriceService {

  baseUrl: string = environment.target;
  
    constructor(private http : HttpClient) {}
  
    getDataSource(paginator,sort,filter) {
        const params = new HttpParams()
              .set('filter', filter)
              .append('limit', paginator.pageSize )
              .append('page', (paginator.pageIndex + 1) )
              .append('order', sort.direction || 'asc' )
              .append('field', sort.active || 'itemName');
  
        return this.http
                      .get<IDataResponse>(`${this.baseUrl}/item/price`,
                      { params : params } );
  
    }
  
    saveData(data : ItemPrice){
      return this.http
                      .post<IStatusResponse>(`${this.baseUrl}/item/price`,data);
    }
  
    getData(id : number){
      return this.http
                      .get<ItemPrice>(`${this.baseUrl}/item/price/${id}`);
    }
  
  
    updateData(data : ItemPrice){
      return this.http
                      .put<IStatusResponse>(`${this.baseUrl}/item/price/${data.itemPriceId}`,data);
    }

}
