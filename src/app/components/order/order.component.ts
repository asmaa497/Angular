import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ICategory } from 'src/app/ViewModels/ICategory';
import { IProductQuantity } from 'src/app/ViewModels/iproduct-quantity';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit,AfterViewInit {
  selectedCatID:number=0;
  totalPrice:number=0;
  category:ICategory[]=[]
  ReceivedCartItems:IProductQuantity[]=[]
  @ViewChild('feedback') feedback!:ElementRef
  @ViewChild(ProductsComponent) ProductsCompObj!: ProductsComponent;
  constructor(private ProService:ProductService) { 

   this.category=[
     {
       ID:1,
       name:"Mobile"
     },
     {
      ID:2,
      name:"TVs"
    },
    {
      ID:3,
      name:"Tablets"
    }
   ]

  }
  ngAfterViewInit(): void {
    this.feedback.nativeElement.style.backgroundColor="lightblue";
    console.log(this.feedback.nativeElement.value);
    //console.log(this.ProductsCompObj.ProductList) // using View Child
    console.log(this.ProService.getAllProducts())

  }
  
  ngOnInit() {
  }
  showCart(CartObj:IProductQuantity)
  {
     console.log(CartObj);
     this.ReceivedCartItems.push(CartObj);
     this.totalPrice+=CartObj.total;
  }
  confirm()
  {
    //var ExternalProductList=this.ProductsCompObj.ProductList; // using View Child
    var ExternalProductList=this.ProService.getAllProducts();
    this.ReceivedCartItems.forEach(element => {
      var pro=ExternalProductList.find(p=>p.ID==element.ID)
      if(pro!=null)
      {
        pro.quantity-=element.count;
      }
    });
    this.ReceivedCartItems=[]
  }
  RemoveItem(item:IProductQuantity)
  {
    const index=this.ReceivedCartItems.findIndex(i=>i.ID==item.ID);
    
      this.totalPrice-=item.total;
      this.ReceivedCartItems.splice(index,1);
    
    
  }
  decrease(item:IProductQuantity)
  {
    if(item.count>1)
    {
      item.count--;
      this.totalPrice-=item.price;
      item.total-=item.price;
    }
    
  }
  increase(item:IProductQuantity)
  {
    //var ExternalProductList=this.ProductsCompObj.ProductList; // using View Child
    var ExternalProductList=this.ProService.getAllProducts();
    var prod=ExternalProductList.find(p=>p.ID==item.ID);
    if(prod && item.count<prod.quantity)
    {
      item.count++;
      this.totalPrice+=item.price;
      item.total+=item.price;
    }
   
    
  }

}
