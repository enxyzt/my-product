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

}

