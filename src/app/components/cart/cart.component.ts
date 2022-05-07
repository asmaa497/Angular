import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/ViewModels/IProduct';
import { IProductQuantity } from 'src/app/ViewModels/iproduct-quantity';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;
  cartItems: IProductQuantity[] = []
  constructor(private ProService: ProductService, private router: Router,private location:Location) {
    console.log("cart " + localStorage.getItem("cart"));
  }

  ngOnInit(): void {
    this.cartItems = JSON.parse((localStorage.getItem("cart")) as any);
    this.cartItems.forEach(element => {
      this.totalPrice += element.total;
    });
  }
  public CreateImgPath(ServerPath: string) {
    return `http://localhost:4319/${ServerPath}`;
  }

  decrease(item: IProductQuantity) {
    if (item.count > 1) {
      item.count--;
      this.totalPrice -= item.price;
      item.total -= item.price;
    }

  }
  increase(item: IProductQuantity) {
    if (item.count < item.quantity) {
      item.count++;
      this.totalPrice += item.price;
      item.total += item.price;
    }

  }
  confirm() {
    var pro: IProduct = {} as IProduct
    this.cartItems.forEach(element => {
      this.ProService.getProductByID(element.ID).subscribe(P => {
        pro.id = P.id;
        pro.catID = P.catID;
        pro.price = P.price;
        pro.img = P.img;
        pro.name = P.name;
        pro.quantity = P.quantity - element.count;
        console.log("Pro  with new Quqan " + JSON.stringify(pro));
        this.ProService.updatePro(pro, element.ID);
      });
    });

    alert("Ordered Successfully");
    //this.location.back();
    this.router.navigate(['/Home']);
  }

Remove(item:IProductQuantity)
{
    var pro=this.cartItems.findIndex(i=>i==item);
    this.cartItems.splice(pro,1);
    this.totalPrice-=item.total;

}


}
