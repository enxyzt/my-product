import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent} from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BadgeOverviewExampleComponent } from './components/badge-overview-example/badge-overview-example.component';
import {MaterialExampleModule} from '../material.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FilterPipe } from './shared/filter.pipe';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'product-list', component: ProductListComponent}
    ]),
    NgbModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    BadgeOverviewExampleComponent,
    HomePageComponent,
    FilterPipe
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

