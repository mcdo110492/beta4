import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from './../../environments/environment';

interface Login {
  username : string;
  password : string;
}

interface LoginResponse {
  profileName? : string;
  profilePic? : string;
  role? : string;
  status : number;
  token? : string;
  error?  : string;
}

@Injectable()
export class AuthenticationService {

  baseUrl : string = environment.target;
  

  constructor(private _http : HttpClient) { }

  //The Authentication that connects to the backend and must return a boolean
  checkValidity() : Observable<boolean>  {

    let isAuthenticated  = new BehaviorSubject<boolean>(true);
      this._http
          .get(`${this.baseUrl}/authenticate`)
          .subscribe( (isValid) => {
              isAuthenticated.next(true);
           },
           (err) => {
             isAuthenticated.next(false);
             console.log(err);
           }
          );

      return isAuthenticated.asObservable();
  }


  //Pass the Username and Password to the backend
  authenticateCredentials(credentials : Login){

      return this._http
                .post<LoginResponse>(`${this.baseUrl}/authenticate` , credentials);

  }

}
