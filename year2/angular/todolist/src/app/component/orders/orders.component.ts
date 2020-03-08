import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { OrderModel } from 'src/app/model/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public oS:OrderService) { }

  ngOnInit() {
    this.oS.loadLastOrders();
  }
  calculateOrderTotalPrice(o:OrderModel):number{
let total:number=0;

for (let index = 0; index < o.basketProducts.length; index++) {
  const e = o.basketProducts[index];
  total+=e.product.price*e.quantity;
}
return total;
  }
}
