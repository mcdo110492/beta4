import { Injectable } from '@angular/core';

import { GroupItem } from './group-item/group-item.model';

import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment.prod';


interface  IDataResponse {
  count : number;
  data  : GroupItem[];
}


interface IStatusResponse {
  status  : number;
  message : string;
}

@Injectable()
export class GroupItemService {

  baseUrl: string = environment.target;
  
    constructor(private http : HttpClient) {}
  
    getDataSource(paginator,sort,filter,groupId) {
        const params = new HttpParams()
              .set('filter', filter)
              .append('limit', paginator.pageSize )
              .append('page', (paginator.pageIndex + 1) )
              .append('order', sort.direction || 'asc' )
              .append('field', sort.active || 'itemName')
              .append('group',groupId);
  
        return this.http
                      .get<IDataResponse>(`${this.baseUrl}/item/group`,
                      { params : params } );
  
    }

    save(data : GroupItem){
      return this.http 
                 .post<IStatusResponse>(`${this.baseUrl}/item/group`,data);

    }


    removeData(id : number){
        return this.http
                        .delete<IStatusResponse>(`${this.baseUrl}/item/group/${id}`);
    }
  

  
  

}
