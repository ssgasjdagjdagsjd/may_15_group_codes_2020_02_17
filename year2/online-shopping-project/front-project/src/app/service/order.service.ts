import { Injectable } from '@angular/core';
import { OrderModel } from '../model/order';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  constructor(private lS:LoginService,private http:HttpClient) {
     

  }
   


  addOrder(order:OrderModel){
   return this.http.post<OrderModel>(`${API_URL}/orders/add`,order);
  }


  findAllByUsername(username:string){
    return this.http.get<OrderModel[]>(`${API_URL}/orders/username/${username}`);
   }


}
