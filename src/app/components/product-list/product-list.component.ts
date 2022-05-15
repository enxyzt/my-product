import {
  Component
} from '@angular/core';
import {
  ApiService
} from '../../services/api.service';

import {
  NotificationService
} from "../../services/notification.service";
import {
  Product,
  products
} from '../../products';
import {
  CartService
} from '../../services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  public productItems: any;
  constructor(
    private cartService: CartService,
    public notificationService: NotificationService,
    private api: ApiService
  ) {}


  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productItems = res;

        this.productItems.forEach((a: any) => {
          Object.assign(a, {
            quantity: 1,
            total: a.price
          });
        })
      });
  }

  public count: number = 0;


  increament() {
    this.count += 1;
    console.log("done");
    return this.count;
  }



  share() {
    window.alert('The product has been shared!');
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
////////////////////////////////////////////////////////////////////////////////////////////////
  inc(item: any) {

    if (item.qnt != 5) {
      item.qnt += 1;
    }
  }
  dec(item: any) {
    if (item.qnt != 1) {
      item.qnt -= 1;
    }
  }
}
