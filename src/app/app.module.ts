import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { SearchComponent } from './search/search.component';
import { TabsComponent } from './tabs/tabs.component';
import { ItemsHeaderComponent } from './items-header/items-header.component';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent} from './shopping-cart/shopping-cart.component'
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsListComponent,
    SearchComponent,
    TabsComponent,
    ItemsHeaderComponent,
    ShoppingCartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DatePipe,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
