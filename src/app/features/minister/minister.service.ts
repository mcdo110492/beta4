import { Injectable } from '@angular/core';

import { Minister } from './minister.model';

import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment';


interface  IDataResponse {
  count : number;
  data  : Minister[];
}

@Injectable()
export class MinisterService {

  baseUrl: string = environment.target;

  constructor(private http : HttpClient) {}

  getDataSource(paginator,sort,filter) {
      const params = new HttpParams()
            .set('filter', filter)
            .append('limit', paginator.pageSize )
            .append('page', (paginator.pageIndex + 1) )
            .append('order', sort.direction || 'asc' )
            .append('field', sort.active || 'minister_name');

      return this.http
                    .get<IDataResponse>(`${this.baseUrl}/minister`,
                    { params : params } );

  }

}
