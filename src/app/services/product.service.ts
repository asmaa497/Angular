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
    
  }
  
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

  updatePro(updatedPro: IProduct, id: number|undefined)
  {
    console.log("id is "+id);
    console.log("service called");
    console.log("name "+updatedPro.name);
    console.log("quantity "+updatedPro.quantity);
    console.log("price "+updatedPro.price);
    console.log("immage "+updatedPro.img);
    console.log("catID "+updatedPro.catID);
     this.httpClient.patch<IProduct>(`${environment.APIBaseURL}/product/${id}`, JSON.stringify(updatedPro),this.httpOptions).subscribe(p=>{
       console.log(p);
     })
     console.log("after calling service");
  }
  DeletePro( id: number|undefined): Observable<IProduct> 
  {
    return this.httpClient.delete<IProduct>(`${environment.APIBaseURL}/products/${id}`);
  }
  
}
