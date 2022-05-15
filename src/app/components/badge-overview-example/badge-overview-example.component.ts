import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-badge-overview-example',
  templateUrl: './badge-overview-example.component.html',
  styleUrls: ['./badge-overview-example.component.css']
})
export class BadgeOverviewExampleComponent implements OnInit {

  number: any;
  // subscription: Subscription;
  public totalItem : number = 0;

  constructor(private cartService: CartService) {
    // this.subscription = this.cartService.getNumber().subscribe(number => { this.number = number });
  }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
}
