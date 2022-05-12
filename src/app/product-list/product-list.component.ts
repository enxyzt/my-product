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
  share() {
    window.alert('The product has been shared!');
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  inc(product: any){
    product.qnt = product.qnt + 1;
  }
  dec(product: any){
    if(product.qnt != 1){
      product.qnt -= 1;
  }
}
}
