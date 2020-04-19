import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/model/product';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { MatDialog } from '@angular/material';
import { AddProductComponent } from '../add-product/add-product.component';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/constants';

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
  
  constructor(private mat:MatDialog, public productService:ProductService, private ls:LoginService,private router:Router,private httpClient:HttpClient) { }

  ngOnInit() {
    console.log('api cagirmazdan evvelki kod');
this.httpClient.get<Product[]>(`${API_URL}/products`,{
  headers: new HttpHeaders({ 
    'Authorization': 'Basic ' + btoa('u1:1')
  })
}).subscribe( 
resp=>{
  this.products=resp;
} 
); 
console.log('api cagirandan sonraki kod');

  }
  onCreateProduct(){
    
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
