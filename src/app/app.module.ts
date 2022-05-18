import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BadgeOverviewExampleComponent } from './components/badge-overview-example/badge-overview-example.component';
import {MaterialExampleModule} from '../material.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FilterPipe } from './shared/filter.pipe';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CheckFormService } from './services/check-form.service';
import { FlashMessagesModule } from 'flash-messages-angular';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FlashMessagesModule.forRoot(),
    MatNativeDateModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule,

    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'cart', component: CartComponent },
      { path: 'product-list', component: ProductListComponent}
    ]),
    NgbModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    CartComponent,
    BadgeOverviewExampleComponent,
    HomePageComponent,
    FilterPipe,
    RegisterComponent,
    LoginComponent,
  ],
  providers: [CheckFormService],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

