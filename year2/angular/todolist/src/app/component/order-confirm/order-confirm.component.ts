import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/model/order';
import { BasketService } from 'src/app/service/basket.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {
order:OrderModel=new OrderModel();
  constructor(private bS:BasketService,private oS:OrderService) { }

  ngOnInit() {
  }
  onConfirm(){
    this.order.basketProducts=this.bS.basketProducts;
    this.order.id=(this.oS.orders.length+1);
    this.oS.orders.push(this.order);
    this.bS.basketProducts=[];
  }
}
