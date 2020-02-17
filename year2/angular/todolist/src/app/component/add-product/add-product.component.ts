import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
p:Product=new Product();

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }
onSave(){
  let id=this.productService.products.length+1;
  this.p.id=id;
  this.productService.products.push(this.p);
  this.productService.hadisemiz.emit(this.p);
  
}
}
