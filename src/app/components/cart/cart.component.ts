import { Component, OnInit} from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  inc(item: any){
    if(item.qnt != 5){
      item.qnt += 1;
  }  }

  dec(item: any){
    if(item.qnt != 1){
      item.qnt -= 1;
  }
}
public count: any;

nullNumber(){
  this.cartService.sendNumber(this.dell());
}
dell(){
  this.count = null;
  return this.count;
}

  constructor(
    private cartService: CartService
  ) { }



  ngOnInit(): void {
  }


  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
}