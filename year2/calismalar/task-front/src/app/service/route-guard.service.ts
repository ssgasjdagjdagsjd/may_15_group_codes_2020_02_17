import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let result: boolean = false;
    let user: string = this.ls.username;
    if (user === '') {
      result = false; 
      this.r.navigate(['login']);
    } else {
     result = true;
    } 
    return result; 
  }

  constructor(private ls:LoginService,private r:Router) { }
}
