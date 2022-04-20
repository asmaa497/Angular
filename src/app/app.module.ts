import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderComponent } from './components/order/order.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { SideMenuComponent } from './components/SideMenu/SideMenu.component';
import { ProductCardDirective } from './Directives/ProductCard.directive';
import { NationalIDPipe } from './pipes/nationalID.pipe';
import { CreditPipe } from './pipes/credit.pipe';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutComponent } from './components/layout/layout.component';
import {HttpClientModule} from '@angular/common/http';
import { NewProductComponent } from './components/new-product/new-product.component'


@NgModule({
  declarations: [
    AppComponent,
    ProductCardDirective,
    NationalIDPipe,
    CreditPipe,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SideMenuComponent,
    OrderComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    NewProductComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
