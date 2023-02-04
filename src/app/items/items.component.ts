import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { items } from './item model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() item: any
  @Output() itemModel = new EventEmitter();
  filterItems: any;
  addToCartItem: any;




  constructor(private commonService: CommonService) {
  }

  ngOnInit(): void {
  }

  openDetails(item: items) {
    this.itemModel.emit(item)
  }

  closeModal() {
    this.addToCartItem.reset();
  }

  AddToCart(value: any) {
    this.addToCartItem = value;
    this.commonService.setAddToCart(this.addToCartItem);
    this.closeModal()



  }

}
