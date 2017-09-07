import { Injectable } from '@angular/core';

import { Group } from './group.model';

import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment.prod';


interface  IDataResponse {
  count : number;
  data  : Group[];
}


interface IStatusResponse {
  status  : number;
  message : string;
}


@Injectable()
export class GroupService {

  baseUrl: string = environment.target;
  
    constructor(private http : HttpClient) {}
  
    getDataSource(paginator,sort,filter) {
        const params = new HttpParams()
              .set('filter', filter)
              .append('limit', paginator.pageSize )
              .append('page', (paginator.pageIndex + 1) )
              .append('order', sort.direction || 'asc' )
              .append('field', sort.active || 'groupName');
  
        return this.http
                      .get<IDataResponse>(`${this.baseUrl}/group`,
                      { params : params } );
  
    }
  
    saveData(data : Group){
      return this.http
                      .post<IStatusResponse>(`${this.baseUrl}/group`,data);
    }
  
    getData(id : number){
      return this.http
                      .get<Group>(`${this.baseUrl}/group/${id}`);
    }
  
  
    updateData(data : Group){
      return this.http
                      .put<IStatusResponse>(`${this.baseUrl}/group/${data.groupId}`,data);
    }

}
