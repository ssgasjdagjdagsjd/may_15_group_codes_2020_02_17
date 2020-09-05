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
  url:string="";

dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  
  constructor(private mat:MatDialog, public productService:ProductService, private ls:LoginService,private router:Router,private httpClient:HttpClient) { }

  ngOnInit() {this.username=this.ls.username;
    this.url=API_URL+'/filedownload/files/';
    console.log('api cagirmazdan evvelki kod');
this.loadByUsername();

console.log('api cagirandan sonraki kod');

this.productService.addProductEvent.subscribe(
  resp=>{
    this.products.push(resp);
  }
);
  }
  loadByUsername() {
    this.productService.findAllByUsername(this.ls.username).subscribe(

      resp=>{
        this.products=resp;
      }
    
    );
  }
  onCreateProduct(){
    this.productService.selectedProduct=null;
    this.mat.open(AddProductComponent);
  }

  onDelete(p:Product,counter:number,status:boolean){
if(status){
  
this.productService.deleteById(p.id).subscribe(
  resp=>{
    this.products.splice(counter,1);
  },error=>{
    alert('Məhsul silinmədi');
  }
);
}
  }

  popoverTitle:string='Təsdiq';
 popoverMessage:string='Tələbə qeydiyyatını təsdiqləməyə əminsiniz?';
onUpdate(p:Product,counter:number){
  this.productService.selectedProduct=this.products[counter];
  let dialoqum=this.mat.open(AddProductComponent);
  dialoqum.afterClosed().subscribe(
    resp=>{
      this.loadByUsername();
    }
  );
}

ngOnDestroy(): void {
  this.dtTrigger.unsubscribe();
}

}
