import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
categories:ProductCategory[]=[];

  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.findAllProductCategories().subscribe(
      resp=>{
        this.categories=resp._embedded.productCategories;
      }
    );
  }
categorySelected(category:ProductCategory){
  console.log(category);
}
}
