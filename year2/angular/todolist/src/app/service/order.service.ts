import { Injectable } from '@angular/core';
import { OrderModel } from '../model/order';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: OrderModel[] = [];
  constructor(private lS:LoginService,private http:HttpClient) {
    this.loadLastOrders();

  }
  loadLastOrders() {

    let ordersString: string = localStorage.getItem('orders');

    if (ordersString) { 
      let orders:OrderModel[]  = JSON.parse(ordersString);  
      let ordersTemp:OrderModel[]=[];

for (let index = 0; index < orders.length; index++) {
  const o = orders[index];
  if(o.username===this.lS.username){
    ordersTemp.push(o);
  }
}

this.orders=ordersTemp;

    } else {
      
      let orders: OrderModel[]=[];
      localStorage.setItem('orders',JSON.stringify(orders));
    }


  }


  addOrder(order:OrderModel){
   return this.http.post<OrderModel>(`${API_URL}/orders/add`,order);
  }
}
