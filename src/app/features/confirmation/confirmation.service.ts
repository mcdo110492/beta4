import { Injectable } from '@angular/core';

import { Confirmation } from './confirmation.model';

import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment';


interface  IDataResponse {
  count : number;
  data  : Confirmation[];
}


@Injectable()
export class ConfirmationService {

  baseUrl: string = environment.target;

  constructor(private http : HttpClient) {}

  getDataSource(paginator,sort,filter) {
      const params = new HttpParams()
            .set('filter', filter)
            .append('limit', paginator.pageSize )
            .append('page', (paginator.pageIndex + 1) )
            .append('order', sort.direction || 'asc' )
            .append('field', sort.active || 'child_name');

      return this.http
                    .get<IDataResponse>(`${this.baseUrl}/confirmation`,
                    { params : params } );

  }

 
}
