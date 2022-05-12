import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  inc(item: any){
    item.qnt = item.qnt + 1;
  }

  dec(product: any){
    if(product.qnt != 1){
      product.qnt -= 1;
  }
}

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}
