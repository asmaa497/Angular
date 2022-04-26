import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../ViewModels/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductList: IProduct[]=[];
  private httpOptions;
  constructor(private httpClient: HttpClient) { 
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // , Authorization': 'Token'
      })
    }
    /*
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
    */

  }
  /*
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
  */
  getAllProducts(): Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/product`)
        // .pipe(
        //   retry(3),
        //   catchError((err)=>{})
        // );
  }

  getProductsByCatID(catID: number): Observable<IProduct[]>
  {
    console.log("ddddddd "+catID);
       if(catID==0)
       {
        return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/product`);
       }
       else
       { 
        return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/product/CatID?id=${catID}`);       
      }
    
  }
  getProductByID(prdID: number|undefined): Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${environment.APIBaseURL}/product/${prdID}`);
  }

  addNewProduct(newPrd: IProduct): Observable<IProduct>
  {
    return this.httpClient.post<IProduct>(`${environment.APIBaseURL}/products`, JSON.stringify(newPrd),this.httpOptions);
  }

  updatePro(updatedPro: IProduct, id: number): Observable<IProduct> 
  {
    return this.httpClient.patch<IProduct>(`${environment.APIBaseURL}/products/${id}`, updatedPro)
  }
  DeletePro( id: number|undefined): Observable<IProduct> 
  {
    return this.httpClient.delete<IProduct>(`${environment.APIBaseURL}/products/${id}`);
  }
  
}
