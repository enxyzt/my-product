import {
  Component
} from '@angular/core';
import {
  ApiService
} from '../../shared/services/api.service';

import {
  NotificationService
} from "../../shared/services/notification.service";
import {
  CartService
} from '../../shared/services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {


  public productItems: any;
  public filterCategory: any
  searchKey: string = "";
  constructor(
    private cartService: CartService,
    public notificationService: NotificationService,
    private api: ApiService
  ) {}


  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productItems = res;
        this.filterCategory = res;
        this.productItems.forEach((a: any) => {
          Object.assign(a, {
            quantity: 1,
            total: a.price
          });
        });
        console.log(this.productItems)
      });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }
  filter(category: string) {
    this.filterCategory = this.productItems
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

}
