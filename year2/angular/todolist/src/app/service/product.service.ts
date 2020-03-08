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
    
   }
}
