import { Component, OnInit } from '@angular/core';
import { IProductQuantity } from 'src/app/ViewModels/iproduct-quantity';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  

  constructor() { 
    console.log("cart "+localStorage.getItem("cart"));
  }

  ngOnInit(): void {
    
  }

}
