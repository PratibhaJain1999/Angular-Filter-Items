import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private filterBtn!: BehaviorSubject<any>;
  private searchValue!:BehaviorSubject<any>;
  private addToCart!:BehaviorSubject<any>
  private count!:BehaviorSubject<any>

  constructor() {
    this.filterBtn = new BehaviorSubject<String>('all');
    this.searchValue= new BehaviorSubject<String>('');
    this.addToCart= new BehaviorSubject<string>('');
    this.count= new BehaviorSubject<Number>(0);
   }

  setValueBtn(value:any) {
    this.filterBtn.next(value);
  }
  getValueBtn() :Observable<String> {
    return this.filterBtn.asObservable();
  }
  setSearchValue(name:any){
    this.searchValue.next(name);
  }
  getSearchValue() :Observable<string>
  {
    return this.searchValue.asObservable();
  }
  setAddToCart(value:any){
    this.addToCart.next(value)
  }
  getAddToCart() :Observable<string> 
  {
   return this.addToCart.asObservable();
  }
  setTotalCount(value:any){
    this.count.next(value)
  }
  getCount() :Observable<string> 
  {
   return this.count.asObservable();
  }

}
