import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

 
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username: string = 'tofiq';
    let password: string = 'tofiq';
    let basicAuthHeaderString: string = 'Basic ' + window.btoa(username + ':' + password);

    request = request.clone(

      {
        setHeaders: {
          Authorization: basicAuthHeaderString
        }


      }

    );
    return next.handle(request);
  }

  constructor() { }
}
