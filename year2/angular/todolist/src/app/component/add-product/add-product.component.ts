import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
p:Product=new Product();
mode:string='';
  constructor(private productService:ProductService,private lS:LoginService) { }

  ngOnInit() {
    if(this.productService.selectedProduct==null){
this.mode='add';
    }else{
      this.mode='update';
      this.p=this.productService.selectedProduct;
    }
    console.log('mode = '+this.mode);
  }
onSave(){
  let id=this.productService.products.length+1;
  this.p.id=id; 
 let productsString:string=localStorage.getItem('products'); 
   let products:Product[]=JSON.parse(productsString);
   this.p.username=this.lS.username;
   products.push(this.p);
   localStorage.setItem('products',JSON.stringify(products));
  this.productService.hadisemiz.emit(this.p);
  
}
}
