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
  public filterCategory : any
  searchKey:string ="";
  constructor(
    private cartService: CartService,
    public notificationService: NotificationService,
    private api: ApiService
  ) {}


  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productItems = res;
      this.filterCategory = res;
      this.productItems.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productItems)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addToCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productItems
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

}
