import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/service/basket.service';
import { BasketProduct } from 'src/app/model/basket';
import { Router } from '@angular/router';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  url: string;
//basketProducts:BasketProduct[]=[];
  constructor(public bS:BasketService,private router:Router) { }

  ngOnInit() {this.url=API_URL+'/filedownload/files/';
    //this.basketProducts=this.bS.basketProducts.slice();

  }
getTotalPrice(){
  let tP:number=0;
  for (let index = 0; index < this.bS.basketProducts.length; index++) {
    const e = this.bS.basketProducts[index];
    tP+=e.product.price*e.quantity;
    
  }
  return tP;
}
onDeleteProduct(counter:number){
  this.bS.basketProducts.splice(counter,1);
}

onToOrderConfirm(){
  this.router.navigate(['order-confirm']);
}
}
