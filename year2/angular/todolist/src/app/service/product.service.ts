import { Injectable, EventEmitter } from '@angular/core';
import { Product, ImageBean } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[];
  addProductEvent:EventEmitter<Product>=new EventEmitter();
  selectedProduct:Product=null;
  constructor(private http:HttpClient) { 
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
create(p:Product){
  return this.http.post<number>(`${API_URL}/products`,p);
}

createFile(file:File){
 let fd:FormData=new FormData();
fd.append('file',file);
  return this.http.post<ImageBean>(`${API_URL}/fileupload`,fd);
}
findAll(){
  return this.http.get<Product[]>(`${API_URL}/products`);
}

 
findAllByUsername(username:string){
  return this.http.get<Product[]>(`${API_URL}/products/username/${username}`);
 }

}

