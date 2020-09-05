import { BasketProduct } from './basket';
import { Customer } from './customer';

export class OrderModel {
    public id:number;
    public basketProducts: BasketProduct[] = [];
    public customer: Customer = new Customer();
    public note: string = '';
public username:string;
}