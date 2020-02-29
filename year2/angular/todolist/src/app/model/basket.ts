import { Product } from './product';

export class BasketProduct{
    public id:number;
    public quantity:number;
    public product:Product=new Product();
}