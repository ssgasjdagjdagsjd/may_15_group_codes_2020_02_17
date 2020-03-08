import { Injectable } from '@angular/core';
import { OrderModel } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
orders:OrderModel[]=[];
  constructor() { 
this.loadLastOrders();

  }
  loadLastOrders(){let ordersString:string=localStorage.getItem('orders');
  let orders:OrderModel[]=JSON.parse(ordersString); 
  this.orders=orders;
}
}
