import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { MatDialog } from '@angular/material';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
username:string='';
products:Product[]=[];
  
  constructor(private mat:MatDialog, private productService:ProductService, private ls:LoginService,private router:Router) { }

  ngOnInit() {
    this.username=this.ls.username;
    this.products=this.productService.products.slice();
  }
  onCreateProduct(){
    this.productService.selectedProduct=null;

let dialoqum=this.mat.open(AddProductComponent);
 this.productService.hadisemiz.subscribe(
   resp=>{
     this.products.push(resp);
   }
 );
  }

  onDelete(p:Product,counter:number,status:boolean){
if(status){
  this.products.splice(counter,1);

}
  }

  popoverTitle:string='Təsdiq';
 popoverMessage:string='Tələbə qeydiyyatını təsdiqləməyə əminsiniz?';
onUpdate(p:Product,counter:number){
  this.productService.selectedProduct=this.products[counter];
  let dialoqum=this.mat.open(AddProductComponent);
}
}
