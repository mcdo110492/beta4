import { Injectable } from '@angular/core';

import { ItemType } from './item-type.model';

import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment.prod';


interface  IDataResponse {
  count : number;
  data  : ItemType[];
}


interface IStatusResponse {
  status  : number;
  message : string;
}

@Injectable()
export class ItemTypeService {

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
                      .get<IDataResponse>(`${this.baseUrl}/item/type`,
                      { params : params } );
  
    }
  
    saveData(data : ItemType){
      return this.http
                      .post<IStatusResponse>(`${this.baseUrl}/item/type`,data);
    }
  
    getData(id : number){
      return this.http
                      .get<ItemType>(`${this.baseUrl}/item/type/${id}`);
    }
  
  
    updateData(data : ItemType){
      return this.http
                      .put<IStatusResponse>(`${this.baseUrl}/item/type/${data.itemTypeId}`,data);
    }

}
