import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/service/basket.service';
import { BasketProduct } from 'src/app/model/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
//basketProducts:BasketProduct[]=[];
  constructor(public bS:BasketService) { }

  ngOnInit() {
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
}
