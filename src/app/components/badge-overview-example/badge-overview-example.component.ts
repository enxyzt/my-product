import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-badge-overview-example',
  templateUrl: './badge-overview-example.component.html',
  styleUrls: ['./badge-overview-example.component.css']
})
export class BadgeOverviewExampleComponent implements OnInit {

  // subscription: Subscription;
  public totalItem : number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
}
