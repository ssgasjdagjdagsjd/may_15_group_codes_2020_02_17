import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/model/product';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { MatDialog } from '@angular/material';
import { AddProductComponent } from '../add-product/add-product.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
username:string='';
products:Product[]=[];
  

dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  
  constructor(private mat:MatDialog, public productService:ProductService, private ls:LoginService,private router:Router) { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };


    this.username=this.ls.username;
    this.products=this.productService.products.slice();
    this.dtTrigger.next();
  }
  onCreateProduct(){
    this.productService.selectedProduct=null;

let dialoqum=this.mat.open(AddProductComponent);
 this.productService.hadisemiz.subscribe(
   resp=>{
    
    let productsString:string=localStorage.getItem('products'); 
   let products:Product[]=JSON.parse(productsString);
this.products=products;
this.productService.loadLastProducts();
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

ngOnDestroy(): void {
  this.dtTrigger.unsubscribe();
}

}
