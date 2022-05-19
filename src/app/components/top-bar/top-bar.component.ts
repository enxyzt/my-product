import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

import { AccountService } from '../../services';
import { User } from '../../_models';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public searchTerm !: any;
  user: User;


 constructor(private cartService : CartService,
  private accountService: AccountService,
  private route: ActivatedRoute,
  private router: Router) {
    this.accountService.user.subscribe(x => this.user = x);
   }

  ngOnInit(): void {
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['../login'], { relativeTo: this.route });
}
}
