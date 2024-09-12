import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealsComponent } from './deals/deals.component';
import { ExampleTextComponent } from './example-text/example-text.component';
import { GoodsComponent } from './products/goods/goods.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './support/about/about.component';
import { ContactUsComponent } from './support/contact-us/contact-us.component';
import { SupportComponent } from './support/support.component';
import { VacanciesComponent } from './support/vacancy/vacancies.component';
import { CheckoutComponent } from './shopping-cart/checkout/checkout.component';
import { InformationComponent } from './shopping-cart/checkout/information/information.component';
import { ShippingComponent } from './shopping-cart/checkout/shipping/shipping.component';
import { VacancyComponent } from './support/vacancy/vacancy/vacancy.component';
import { NewComponent } from './deals/new/new.component';
import { SaleComponent } from './deals/sale/sale.component';
import { Solutions } from './deals/solutions/solutions.component';
import { Title } from '@angular/platform-browser';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', title: 'NOVA Official Store', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  {
    path: 'products', title: 'NOVA Products', component: ProductsComponent,
    children: [
      { path: 'charges', title: 'CHARGES - NOVA', component: GoodsComponent },
      { path: 'cabels', title: 'CABELS - NOVA', component: GoodsComponent },
      { path: 'power-banks', title: 'POWER BANKS - NOVA', component: GoodsComponent },
      { path: 'earphones', title: 'EARPHONES - NOVA', component: GoodsComponent }
    ]
  },
  {
    path: 'item', 
    children: [
      { path: '**', title: "Title", component: ItemComponent } 
    ]
  },
  {
    path: 'deals', title: 'NOVA Deals', component: DealsComponent,
    children: [
      
      { path: 'solutions', title: 'SOLUTIONS - NOVA', component: DealsComponent },
      { path: 'sale', title: 'SALE - NOVA', component: DealsComponent },
      { path: 'new', title: 'NEW - NOVA', component: DealsComponent }
    ]
  },
  {
    path: 'support', title: 'NOVA Support', component: SupportComponent,
    children: [
      { path: 'contact-us', title: 'CONTACT US - NOVA', component: ContactUsComponent },
      { path: 'vacancies', 
      children: [
      { path: '', title: 'VACANCIES - NOVA', component: VacanciesComponent},
      { path: '**', title: 'VACANCIES - NOVA', component: VacancyComponent}
      ]
      },
      { path: 'about', title: 'ABOUT - NOVA', component: AboutComponent }
    ]
  },
  {
    path: ':id/checkout', component: CheckoutComponent,
    children: [
      { path: '', title: 'Information Checkout', component: InformationComponent},
      { path: 'shipping', title: 'Shipping Checkout', component: ShippingComponent},
    ]  
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'pages/:id',
    children: [
      { path: '**', component: ExampleTextComponent}
    ]
  },
  { path: '**', title: '404 - Not Found', component: PageNotFoundComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
