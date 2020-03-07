import { Injectable } from '@angular/core';
import { OrderModel } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
orders:OrderModel[]=[];
  constructor() { }
}
