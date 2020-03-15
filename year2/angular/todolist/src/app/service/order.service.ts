import { Injectable } from '@angular/core';
import { OrderModel } from '../model/order';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: OrderModel[] = [];
  constructor(private lS:LoginService) {
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
}
