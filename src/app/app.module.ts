import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent} from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BadgeOverviewExampleComponent } from './badge-overview-example/badge-overview-example.component';
import {MaterialExampleModule} from '../material.module';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SnackBarOverviewComponent } from './snack-bar-overview/snack-bar-overview.component';
import { HomePageComponent } from './home-page/home-page.component';
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
    SnackBarOverviewComponent,
    BadgeOverviewExampleComponent,
    HomePageComponent
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

