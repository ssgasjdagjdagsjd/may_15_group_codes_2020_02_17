import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
 
  constructor(private userService:UserService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    
    
if(this.userService.token===''){}else{
    request = request.clone(

      {
        setHeaders: {
          Authorization: this.userService.token
        }


      }

    );}
    return next.handle(request);
  }
}
