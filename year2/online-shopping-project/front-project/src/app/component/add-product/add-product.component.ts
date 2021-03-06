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

category:string='';

categories:string[]=['c1','c2','c3'];

  constructor(private productService:ProductService,private lS:LoginService) { }

  ngOnInit() {
    if(this.productService.selectedProduct==null){
this.mode='add';
    }else{
      this.mode='update';
    this.productService.findById(this.productService.selectedProduct.id)
    .subscribe
    (
      resp=>{
        this.p=resp;
      }
    );
    }
    console.log('mode = '+this.mode);
  }
onSave(){ alert(this.category)
  this.productService.createFile(this.imageFile).subscribe(
    resp=>{
      this.p.image=resp.image;
      this.p.username=this.lS.username;
      if(this.mode==='add'){
        this.productService.create(this.p).subscribe(
          resp=>{
             this.p.id=resp;
            this.productService.addProductEvent.emit(this.p);
            let pString:string=JSON.stringify(this.p);
  
            this.p=new Product();
  this.p=JSON.parse(pString);
          }
        );
      }else{ this.productService.update(this.p).subscribe(
        resp=>{
           
         
        }
      );}
     

    }
  );
  
  
}

imageFile:File=null;
onImageSelected(event){
  this.imageFile=event.target.files[0];

}
}
