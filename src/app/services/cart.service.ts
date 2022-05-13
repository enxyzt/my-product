import { Injectable } from '@angular/core';
import { Product } from '../products';
import { Subject, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  public productList = new BehaviorSubject<any>([]);

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeCartItem(product: any){
  this.items.map((a:any, index:any)=>{
    if(product.id=== a.id){
      this.items.splice(index,1);
    }
  })
  this.productList.next(this.items);
  }
  removeAllCart(){
  this.items.length = 0;
  this.productList.next(this.items);
  }
  ///////////////////////////////////////////////
  getItems() {
    return this.items;
    }

  private subject = new Subject<any>();

  sendNumber(number:number){
    this.subject.next({text:number});
  }

  getNumber():Observable<any>{
    return this.subject.asObservable();
  }
  constructor() { }
}
