import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  totalAmount=0;
  cgst=0;
  sgst=0;
  discount=0;
  netAmount=0;


  cartItem:any=[
    
  ];
  cartItemArray:any;

  constructor(private commonService:CommonService){
    
  }
  
  ngOnInit(): void {
    this.commonService.getAddToCart().subscribe((responsiveData) => {
      this.cartItem = responsiveData;
      this.cartItem.forEach((element:any) => {
        this.totalAmount=this.totalAmount + parseInt(element.price);
        
      });
      this.cgst = 10/100 * this.totalAmount;
      this.sgst = 10/100 * this.totalAmount;
      this.discount= 10/100 * this.totalAmount-10/100;
      this.netAmount = this.cgst + this.sgst - this.discount + this.totalAmount;
  })

  }

}
