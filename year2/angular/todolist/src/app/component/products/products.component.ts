import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { BasketService } from 'src/app/service/basket.service';
import { BasketProduct } from 'src/app/model/basket';
import { MatDialog } from '@angular/material';
import { BasketComponent } from '../basket/basket.component';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  url: string;
  constructor(private productService: ProductService, private basketService: BasketService, private matD: MatDialog) { }

  ngOnInit() {this.url=API_URL+'/filedownload/files/';
    //this.products = this.productService.products.slice();
this.productService.findAll().subscribe(
  resp=>{
    this.products=resp;
  }
);
  }
  onToBasket(p: Product) {
  // increment quantity by one
   let itIsOnTheBasket:boolean=false;
  for (let index = 0; index < this.basketService.basketProducts.length; index++) {
    const e = this.basketService.basketProducts[index];
    if(e.product.id==p.id){ 
      this.basketService.basketProducts[index].quantity++;
      itIsOnTheBasket=true;
      break;
    }
  } 
  if(!itIsOnTheBasket){
    let basketProduct: BasketProduct = new BasketProduct();
    basketProduct.quantity = 1;
    basketProduct.product = p;
    this.basketService.basketProducts.push(basketProduct);
  }
    this.showToBasketButton = false;
    setTimeout(() => {
      this.showToBasketButton = true;
    }, 200);


  }

  onOpenBasket() {
    this.matD.open(BasketComponent);

  }

  trimText(text: string, length: number) {
    if (text.length > length) {
      return text.substr(0, length) + '...';
    } else {
      return text;
    }
  }


  showToBasketButton: boolean = true;

  findAllProductQuantity(): number {
    let count: number = 0;
    for (let index = 0; index < this.basketService.basketProducts.length; index++) {
      const e = this.basketService.basketProducts[index];
      count += e.quantity;
    }

    return count;
  }
}
