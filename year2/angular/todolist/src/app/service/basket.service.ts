import { Injectable } from '@angular/core';
import { BasketProduct } from '../model/basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
basketProducts:BasketProduct[]=[];
  constructor() { }
}
