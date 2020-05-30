export class Product{
    public id:number;
    public name:string;
    public price:number;
    public image:string;
    public username:string;
}

export class ImageBean{
    public id:number;
   
    public image:string;
    
}

  export class SearchModel {
        begin:number;
        length:number;
        searchKey:string;
    
    }