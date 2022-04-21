import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ICategory } from 'src/app/ViewModels/ICategory';
import { IProduct } from 'src/app/ViewModels/IProduct';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  newPrd: IProduct={} as IProduct;
  ProUpdateId:number=0
  catList: ICategory[]=[];
  
 
  constructor(private prdService: ProductService
    , private router: Router
    ,private CatService:CategoryService,
    private activatedRoute:ActivatedRoute ) 
    { 
      /*
      this.newPrd={
           name:'Test Mobile From API',
           price:150,
           quantity:15,
           img:'https://picsum.photos/id/237/150/100.jpg',
           catID: 2
         }
         */
      this.CatService.getAllCateogories().subscribe(CatLst=>{
        this.catList=CatLst;
      
      })

    }

  ngOnInit(): void {
    this.ProUpdateId=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    if(this.ProUpdateId!=0)
    {
      this.prdService.getProductByID(this.ProUpdateId).subscribe(prd=>{
        this.newPrd=prd;
      });
    }
    
  }
  saveProduct()
  {
    this.newPrd.img='https://picsum.photos/id/237/150/100.jpg';
    this.ProUpdateId=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    if(this.ProUpdateId!=0)
    {
      this.prdService.updatePro(this.newPrd,+this.ProUpdateId).subscribe(prd=>{
        this.router.navigate(['/Products']);
      });
    }
    else
    {
      this.prdService.addNewProduct(this.newPrd).subscribe(prd=>{
        this.router.navigate(['/Products']);
      });
    }
    
  }
  

}