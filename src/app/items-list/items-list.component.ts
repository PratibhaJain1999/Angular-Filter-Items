import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonService } from '../shared/common.service';
 import { items } from '../items/item model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  @Input() filterBtn: any
  @Input() searchValueSelect:any
  modelView:any = {
    name: '',
    imagePath: '',
    price: ''
  };
  showModal =false;
  flag=false;


    searchValue:any
  filterList: any = []
  itemsList = [
    {
      id: '1',
      type: 'pizza',
      name: 'Margherita pizza',
      price: '130',
      imagePath: 'pizza1.jpg'
    },
    {
      id: '2',
      type: 'burger',
      name: 'Magic burger',
      price: '90',
      imagePath: 'Burger1.jpg'
    },
    {
      id: '3',
      type: 'sandwich',
      name: 'paneer sandwich',
      price: '180',
      imagePath: 'sandwitch1.jpg'
    },
    {
      id: '4',
      type: 'icecream',
      name: 'chocolate icecream',
      price: '100',
      imagePath: 'Icecream1.jpg'
    },
    {
      id: '5',
      type: 'coldrink',
      name: 'fanta',
      price: '100',
      imagePath: 'coldrink1.jpg'
    },
    {
      id: '6',
      type: 'pizza',
      name: 'veggie pizza',
      price: '110',
      imagePath: 'Pizza 2.jpeg'
    },
    {
      id: '7',
      type: 'sandwich',
      name: 'veg sandwich',
      price: '60',
      imagePath: 'sandwich2.jpg'
    },
    {
      id: '8',
      type: 'burger',
      name: 'portfolio burger',
      price: '70',
      imagePath: 'burger2.jpg'
    },
    {
      id: '9',
      type: 'icecream',
      name: 'strawberry icecream',
      price: '45',
      imagePath: 'icecream2.jpg'
    },
    {
      id: '10',
      type: 'coldrink',
      name: 'Limca',
      price: '40',
      imagePath: 'coldrink2.jpg'
    },
    {
      id: '11',
      type: 'pizza',
      name: 'loaded pizza',
      price: '70',
      imagePath: 'pizza3.jpg'
    },
    {
      id: '12',
      type: 'sandwich',
      name: 'mayonaise sandwich',
      price: '60',
      imagePath: 'Sandwich3.jpg'
    }, {
      id: '13',
      type: 'burger',
      name: 'veggie burger',
      price: '90',
      imagePath: 'burger3.jpg'
    }, {

      id: '14',
      type: 'icecream',
      name: 'black current icecream',
      price: '40',
      imagePath: 'icecream3.jpg'
    }, 
    {
      id: '15',
      type: 'coldrink',
      name: 'sprite',
      price: '50',
      imagePath: 'coldrink3.jpg'
    }
]

cartItems:any = [];

  constructor(private commonSer: CommonService) {
      this.commonSer.getValueBtn().subscribe((value) => {
        if (value == 'all') {
          this.filterList = this.itemsList
        }
        else {
          this.filterList = this.itemsList.filter(x => x.type == value)
        }
      });
      this.commonSer.getSearchValue().subscribe((name) =>{
      this.filterList = this.itemsList.filter(x => x.name.includes(name))

      })
     
   }

  ngOnInit(): void {
    this.filterList = this.itemsList

  }
  ngOnChanges() {
  }
model(event:any){
  this.showModal =true;
 this.modelView=event;
}
  AddToCart(){
    if(this.cartItems.includes(this.modelView))
    {
      Swal.fire(
        'Warning',
        'Item already exisits...!!',
        'warning'
      )
    } else {
      this.cartItems.push(this.modelView);
      this.commonSer.setAddToCart(this.cartItems);
      this.flag=true;
      Swal.fire(
        'Successfully',
        'Your items are successfully added',
        'success'
      )
      this.commonSer.setTotalCount(this.cartItems.length)
    }
    this.showModal = false;
  }
  closeModal(){
    this.showModal = false;
  }
}
  



