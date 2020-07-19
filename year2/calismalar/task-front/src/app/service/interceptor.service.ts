import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class  InterceptorService implements HttpInterceptor {

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

  constructor(private userService:UserService) { }
}