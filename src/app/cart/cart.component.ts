import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  @Input() itemsCount = this.items.length;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}
