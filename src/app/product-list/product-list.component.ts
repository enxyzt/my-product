import { Component } from '@angular/core';

import { Product, products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  constructor(
    private cartService: CartService  ) { }


    public count: number = 0;
  sendNumber() {
    this.cartService.sendNumber(this.increament());
  }

  increament() {
    this.count += 1;
    console.log("done");
    return this.count;
  }



  share() {
    window.alert('The product has been shared!');
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  inc(item: any){

    if(item.qnt != 5){
      item.qnt += 1;
    }
  }
  dec(item: any){
    if(item.qnt != 1){
      item.qnt -= 1;
  }
}
}
