import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
