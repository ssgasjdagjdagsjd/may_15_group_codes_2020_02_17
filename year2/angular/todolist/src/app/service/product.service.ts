import { Injectable, EventEmitter } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[];
  hadisemiz:EventEmitter<Product>=new EventEmitter();
  selectedProduct:Product=null;
  constructor() { 
    this.loadLastProducts(); 
   } 
   loadLastProducts() { 
    let productsString:string=localStorage.getItem('products');  
    if (productsString) {
      let products: Product[] = JSON.parse(productsString);
      this.products = products;
    } else { 
      let products: Product[]=[];
      localStorage.setItem('products',JSON.stringify(products));
    }


  }

}
