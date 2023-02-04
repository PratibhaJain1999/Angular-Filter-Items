import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Output()tabSelected =new EventEmitter
totalCount: any;
  constructor(private commonSer: CommonService) {
    this.commonSer.getCount().subscribe((res) =>{
      this.totalCount = res;

      })
   }

  ngOnInit(): void {
  }
  filteritems(type:any){
   this.tabSelected.emit(type)
  }

}
