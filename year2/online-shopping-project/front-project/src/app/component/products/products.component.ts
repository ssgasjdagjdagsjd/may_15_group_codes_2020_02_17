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
  begin:number=0;
  length:number=15;
  constructor(private productService: ProductService, private basketService: BasketService, private matD: MatDialog) { }

  ngOnInit() {this.url=API_URL+'/filedownload/files/';
    //this.products = this.productService.products.slice();
this.productService.findPartial(this.begin,this.length).subscribe(
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


  onScroll(){
    this.begin+=15;
     this.productService.findPartialSearch(this.begin,this.length,this.searchText).subscribe(

      resp=>{
        this.products.push(...resp);
      }
     );

  }

  searchText:string='';
  onSearch(event){
    let searchText:string=event.target.value;
    this.searchText=searchText;
    //console.log(searchText);
    this.begin=0;
    this.productService.findPartialSearch(this.begin,this.length,searchText).subscribe(
      resp=>{
        this.products=resp;
      }
    );
  }

}
