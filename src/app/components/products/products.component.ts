import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';
import { ProductService } from 'src/app/services/product.service';

import { ICategory } from 'src/app/ViewModels/ICategory';
import { IProduct } from 'src/app/ViewModels/IProduct';
import { IProductQuantity } from 'src/app/ViewModels/iproduct-quantity';
import { Store } from 'src/app/ViewModels/Store';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges{
  strore = new Store();
  date:Date=new Date()
  FilteredProd:IProduct[]=[]
  IsPurshased  :boolean;
  ClientName: string;
  //ProductList: IProduct[]=[];
  categroy:ICategory[]=[];
  selectedCatID:number=1
  prdListOfCat:IProduct[]=[];
  @Input() receivedSelCatID:number=0;
  @Output() onAddToCart:EventEmitter<IProductQuantity>;
  birthDate:string="29909011509345"
  creditCart:string="0000000000000000"
  TestPro:IProduct={} as IProduct
  constructor(private ProService:ProductService) {
    this.onAddToCart= new EventEmitter<IProductQuantity>();
    this.strore.logo = "https://fakeimg.pl/250x100/";
    this.strore.name = "ZARA Store";
    this.strore.branches = ["assuit", "sohag"];
    this.ClientName = "asmaa";
    this.IsPurshased=true;
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("this.receivedSelCatID"+this.receivedSelCatID);
    this.ProService.getProductsByCatID(this.receivedSelCatID).subscribe(prdList=>{
      console.log("the list coming "+JSON.stringify(prdList));
      this.prdListOfCat=prdList;
    });
    
    
  }
  ngOnInit() :void{
    console.log("this.receivedSelCatID  "+this.receivedSelCatID);
    this.ProService.getAllProducts().subscribe(prdList=>{
      this.prdListOfCat=prdList;
    });
    
  }
  hide()
  {
      this.IsPurshased=!this.IsPurshased;
  }
  selected()
  {
    console.log(this.selectedCatID)
  }
  decrease(id:number|undefined)
  {
    this.ProService.getAllProducts().subscribe(ProLst=>{
      ProLst.forEach(element => {
        if(element.id==id)
        {
          element.quantity--;
        }
      })
    })
   
    
  
  }
  AddToCartBtn(itemsCount:number, ProID:number|undefined)
  {
    //alert(ProID);
    //console.log(itemsCount);
    var Test:IProduct
    this.ProService.getProductByID(ProID).subscribe((prod)=>{
      Test=prod;    
      //console.log(Test);
      if(prod!=null && prod.quantity>=itemsCount && itemsCount!=0)
      {
        let myObj:IProductQuantity=
        {
           ID:prod.id,
           count:itemsCount,
           name:prod.name,
           price:prod.price,
           total:prod.price*itemsCount
         }
        //  alert("muobj "+myObj);
         this.onAddToCart.emit(myObj);
         
      }
      else
      {
        alert("Invalid Quantity");
      }
    });
    //console.log("asmaa");      
    /*
      if(prod!=null && prod.quantity>=itemsCount)
      {
        let myObj:IProductQuantity=
        {
           ID:prod.id,
           count:itemsCount,
           name:prod.name,
           price:prod.price,
           total:prod.price*itemsCount
         }
         this.onAddToCart.emit(myObj);

      }
    */
    /*
      var prod=this.ProService.getAllProducts().find(p=>p.ID==ProID);
      //var prod=this.ProductList.find(p=>p.ID==ProID);
      if(prod!=null && prod.quantity>=itemsCount)
      {
        let myObj:IProductQuantity=
        {
           ID:prod.ID,
           count:itemsCount,
           name:prod.name,
           price:prod.price,
           total:prod.price*itemsCount
         }
         this.onAddToCart.emit(myObj);

      }
      */

      
  }
  openNewPro()
  {
    
  }
  DeletePro(ProID:number|undefined)
    {
      /*
      var product:IProduct
      this.ProService.getProductByID(ProID).subscribe(pro=>{
          product=pro;       
          let ProIndex=this.prdListOfCat.findIndex((pro)=>pro==product);
          */
          var res = confirm("Are you sure you want to delete this product ?");        
          if(res)
          {            
            this.ProService.DeletePro(ProID).subscribe(pro=>{
              console.log(pro);
              //this.prdListOfCat.splice(ProIndex,1);
            })
          }
      //})
      
    }
  public  CreateImgPath(ServerPath:string)
    {
      console.log("server Path  "+ServerPath);
       return `http://localhost:4319/${ServerPath}`;
       
       //D:/ITI study/Angular/APIAsmaa/EcommerceAPI/EcommerceAPI/Resources/Images/Screenshot (1).png
       //Resources\Images\Screenshot (8).png
    }

}
