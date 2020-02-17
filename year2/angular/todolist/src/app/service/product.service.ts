import { Injectable, EventEmitter } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[];
  hadisemiz:EventEmitter<Product>=new EventEmitter();
  constructor() {

    let p1=new Product();
p1.id=1;
p1.name="Samsung g6";
p1.price=567;
p1.image='https://mzimg.com/big/w1/fvhe63vzuw1.jpg';


let p2=new Product();
p2.id=2;
p2.name="I mac made in Apple";
p2.price=890;
p2.image='https://www.apple.com/newsroom/images/product/os/macos/standard/Apple-macOS-Mojave-iMac-Pro-dark-mode-screen-09242018_big.jpg.large.jpg';




    this.products.push(p1,p2);
    
   }
}
