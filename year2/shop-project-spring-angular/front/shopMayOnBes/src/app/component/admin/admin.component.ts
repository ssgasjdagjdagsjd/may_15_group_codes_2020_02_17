import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { Product, ProductCategory } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
categories:ProductCategory[]=[];
products:Product[]=[];
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.findAllProductCategories().subscribe(
      resp=>{
        this.categories=resp._embedded.productCategories;
      }
    );



    this.ps.findAllProducts().subscribe(
      resp=>{
        this.products=resp._embedded.products;
      }
    );


  }
categorySelected(category:ProductCategory){
  console.log(category);
}


columnDefs = [
  { headerName: 'Kod', field: 'id', sortable: true, filter: true, checkboxSelection: true,width:100 },
  { headerName: 'Ad', field: 'name', sortable: true, filter: true,width:100 }
   
];

@ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
private gridApi;
  
onGridReady(event) {
    this.gridApi = event.api;
}

searchText: string = '';

quickSearch() {
    this.gridApi.setQuickFilter(this.searchText);
}

}
