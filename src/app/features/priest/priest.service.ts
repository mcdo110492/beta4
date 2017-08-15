import { Injectable } from '@angular/core';

import { Priest } from './priest.model';

import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment';


interface  IDataResponse {
  count : number;
  data  : Priest[];
}

@Injectable()
export class PriestService {

  baseUrl: string = environment.target;

  constructor(private http : HttpClient) {}

  getDataSource(paginator,sort,filter) {
      const params = new HttpParams()
            .set('filter', filter)
            .append('limit', paginator.pageSize )
            .append('page', (paginator.pageIndex + 1) )
            .append('order', sort.direction || 'asc' )
            .append('field', sort.active || 'priest_name');

      return this.http
                    .get<IDataResponse>(`${this.baseUrl}/priest`,
                    { params : params } );

  }

}

