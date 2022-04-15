import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductList: IProduct[]=[];
  constructor() { 
    this.ProductList = [

      {

        ID: 1,

        name: 'product1',

        quantity: 9,

        price: 400,

        img: 'https://fakeimg.pl/250x100/',

        catID: 1,
        date:new Date()

      },
      {

        ID: 2,

        name: 'product11',

        quantity: 1,

        price: 400,

        img: 'https://fakeimg.pl/250x100/',

        catID: 1,
        date:new Date()

      },

      {

        ID: 3,

        name: 'product2',

        quantity: 30,

        price: 400,

        img: 'https://fakeimg.pl/250x100/',

        catID: 2,
        date:new Date()

      },
      {

        ID: 4,

        name: 'product22',

        quantity: 30,

        price: 400,

        img: 'https://fakeimg.pl/250x100/',

        catID: 2,
        date:new Date()

      },

      {

        ID: 5,

        name: 'product3',

        quantity: 30,

        price: 400,

        img: 'https://fakeimg.pl/250x100/',

        catID: 3,
        date:new Date()

      },
      {

        ID: 6,

        name: 'product33',

        quantity: 30,

        price: 400,

        img: 'https://fakeimg.pl/250x100/',

        catID: 3,
        date:new Date()

      },

    ];

  }
  getProductsByCatID(catID:number): IProduct[]
  {
       if(catID==0)
       {
         return this.ProductList;
       }
       else
       { 
        return this.ProductList.filter(p=>p.catID==catID);
       }
       
  }
  getProductByID(prodID:number): IProduct|undefined
  {
    return this.ProductList.find(p=>p.ID==prodID);
  }
  getAllProducts(): IProduct[]
  {
    return this.ProductList;
  }
  getPrdIDsList(): number[]
  {
    return this.ProductList.map(prd=>prd.ID);
  }
}
