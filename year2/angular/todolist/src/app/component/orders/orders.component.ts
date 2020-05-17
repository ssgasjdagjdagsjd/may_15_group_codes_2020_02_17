import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { OrderModel } from 'src/app/model/order';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: OrderModel[] = [];
  constructor(public oS:OrderService,private lS:LoginService) { }

  ngOnInit() {
    this.oS.findAllByUsername(this.lS.username).subscribe(
      resp=>{
        this.orders=resp;
      }
    );

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
