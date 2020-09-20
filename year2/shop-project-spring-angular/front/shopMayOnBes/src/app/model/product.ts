
export class Product {
    public id: number;
    public name: string;
    public description: string;
    public imageUrl: string;
    public unitPrice: number;



}



export class ProductCategory {
    public id: number;
    public categoryName: string;
    public products: Product[] = [];
}


export class ProductServiceModel{
    public _embedded:Embedded;

}
export class Embedded{
    public productCategories:ProductCategory[]=[];
}