import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { fakeBackendProvider } from './_helpers';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertComponent } from './components/alert/alert.component';

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
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ProfileComponent } from './components/profile/profile.component';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatNativeDateModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule,

    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      {path: 'profile', component: ProfileComponent},
      { path : 'forgot-password', component: ForgotPasswordComponent},
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'cart', component: CartComponent },
      { path: 'product-list', component: ProductListComponent}
    ]),
    NgbModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    TopBarComponent,
    ProductListComponent,
    CartComponent,
    BadgeOverviewExampleComponent,
    HomePageComponent,
    FilterPipe,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ProfileComponent,
  ],
  providers: [CheckFormService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

