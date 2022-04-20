import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderComponent } from './components/order/order.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', component:LayoutComponent, children: [
    {path:'', redirectTo:'/Home', pathMatch:'full'},
    {path:'Home', component:HomeComponent},
    {path:'Products', component:ProductsComponent},
    {path:'Products/:pid', component:ProductDetailsComponent},
    {path:'Order', component:OrderComponent},
    {path:'AboutUs', component:AboutUsComponent},
    {path:'ContactUs', component:ContactUsComponent}, 
    {path:'NewProduct/:pid', component:NewProductComponent}, 

  ]},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
