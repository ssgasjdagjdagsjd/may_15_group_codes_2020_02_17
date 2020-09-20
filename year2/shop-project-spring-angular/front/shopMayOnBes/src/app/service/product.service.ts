import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { ProductListServiceModel, ProductServiceModel } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor(private http:HttpClient) { }

  findAllProductCategories() {
    return this.http.get<ProductServiceModel>(`${API_URL}/productCategories`);
  }

  findAllProducts() {
    return this.http.get<ProductListServiceModel>(`${API_URL}/products`);
  }

}
