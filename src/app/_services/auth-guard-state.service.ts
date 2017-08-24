import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/first';






import { CanActivate, CanActivateChild, CanLoad ,ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardStateService implements CanActivate, CanActivateChild, CanLoad {

  constructor(private _authService : AuthenticationService, private _router : Router)  { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) : Observable<boolean> {
      let authValidity = this._authService.checkValidity();
      let isValid      = new BehaviorSubject<boolean>(false);

      authValidity.subscribe( res => {
        if(!res){
          localStorage.clear();
          this._router.navigateByUrl('/login');
        }
        isValid.next(res);
      })

      return isValid.asObservable().first();
  }

  canActivateChild(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> {

    return this.canActivate(route,state);
    
  }

  canLoad(route : Route) : Observable<boolean> {
    
    let authValidity = this._authService.checkValidity();
    let isValid      = new BehaviorSubject<boolean>(false);

    authValidity.subscribe( res => {
      if(!res){
        localStorage.clear();
        this._router.navigateByUrl('/login');
      }
      isValid.next(res);
    })

    return isValid.asObservable().first();
    
  }

  


}
