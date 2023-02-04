import { Component } from '@angular/core';
import { CommonService } from './shared/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  title = 'filter-items';
  filterBtn:any
  searchValueSelect:any

  constructor(private commonSer:CommonService) {}
  tabSelected(type:any){
this.filterBtn=type;
this.commonSer.setValueBtn(this.filterBtn);

  }
  searchText(value:any){
this.searchValueSelect=value;
this.commonSer.setSearchValue(this.searchValueSelect)
  }

}

