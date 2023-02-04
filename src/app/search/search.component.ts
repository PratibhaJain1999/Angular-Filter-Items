import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchValueText:any
  @Output()searchText=new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  searchValue(){
    this.searchText.emit(this.searchValueText)
  }

}
